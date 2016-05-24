export default class LoginService {
    constructor($mdDialog, $state, $firebaseArray) {
        this.$mdDialog = $mdDialog;
        this.$state = $state;
        this.$firebaseArray = $firebaseArray;
        this.ref = new Firebase("to-do-app2.firebaseio.com/users");
        this.users = this.$firebaseArray(this.ref);
        this.loggedIn = this.isLoggedIn();
    }
    
    login(email) {
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
            localStorage.setItem("session", email);
            this.loggedIn = this.isLoggedIn();
            this.$state.go('home');
        } else {
            this.showErrorMessage();
        }
    }
    
    showErrorMessage() {
        this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('User does not exists')
                    .textContent('You have to sign up first')
                    .ariaLabel('User does not exists')
                    .ok('Got it!')
            );
    }
    
    isLoggedIn() {
        return localStorage.getItem("session") !== null;
    }
    
    logout() {
        localStorage.removeItem("session");
        this.loggedIn = this.isLoggedIn();
        this.$state.go('home');
    }
}