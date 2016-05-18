export default class LoginService {
    constructor(md5, $mdDialog, $state) {
        this.md5 = md5;
        this.$mdDialog = $mdDialog;
        this.$state = $state;
        this.ref = new Firebase("to-do-app2.firebaseio.com");
        this.loggedIn = this.isLoggedIn();
    }
    
    login(email) {
        this.loginIfUserExists(email);
    }
    
    loginIfUserExists(email) {
        this.ref.child('user_index/' + this.md5.createHash(email)).once('value', (snapshot) =>
            this.ifUserExistsCallbackHandler(snapshot, email));
    }

    ifUserExistsCallbackHandler(snapshot, email) {
        if (snapshot.exists()) {
            localStorage.setItem("session", email);
            this.loggedIn = this.isLoggedIn();
            this.$state.go('home');
        } else {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('User does not exists')
                    .textContent('You have sign up first')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
            );
        }
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