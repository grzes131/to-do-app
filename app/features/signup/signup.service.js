export default class SignUpService {
    constructor($mdDialog, $state, $firebaseArray) {
        this.$mdDialog = $mdDialog;
        this.$state = $state;
        this.$firebaseArray = $firebaseArray;
        this.ref = new Firebase("to-do-app2.firebaseio.com/users");
        this.users = this.$firebaseArray(this.ref);
    }
    
    registerUser(email) {
        this.users.$loaded().then(users => this.onLoadCallbackHandler(users, email));
    }
    
    onLoadCallbackHandler(users, email) {
        let isUserExists = false;
        users.forEach(function (item, index) {
            if (item.email === email) {
                isUserExists = true;
            }
        });
        
        if (isUserExists) {
            this.showErrorMessage();
        } else {
            this.createUser(email);
        }
    }
    
    showErrorMessage() {
        this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('User already exists')
                    .textContent('You have provide another email address')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
            );
    }

    createUser(email) {
        this.users.$add({
            email: email
        }).then(ref => this.createUserCallbackHandler(ref));
    }
    
    createUserCallbackHandler(ref) {
        this.$state.go("login");
    }
}