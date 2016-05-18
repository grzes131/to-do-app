export default class SignUpService {
    constructor(md5, $mdDialog, $state) {
        this.md5 = md5;
        this.$mdDialog = $mdDialog;
        this.$state = $state;
        this.ref = new Firebase("to-do-app2.firebaseio.com");
    }
    
    registerUser(email) {
        this.createUserIfNotExists(email);
    }

    createUserIfNotExists(email) {
        this.ref.child('user_index/' + this.md5.createHash(email)).once('value', (snapshot) =>
            this.ifUserExistsCallbackHandler(snapshot, email));
    }

    ifUserExistsCallbackHandler(snapshot, email) {
        if (snapshot.exists()) {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('User already exists')
                    .textContent('You have provide another email address')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
            );
        } else {
            this.createUser(email);
        }
    }

    createUser(email) {
        let userRef = this.ref.child('users').push();
        userRef.set({
            email: email
        }, (error) => this.createUserCallbackHandler(error, userRef, email));
    }

    createUserCallbackHandler(error, userRef, email) {
        if (error) {
            console.log(error);
        } else {
            this.saveUserIndex(userRef.key(), email);
            this.$state.go("login");
        }
    }

    saveUserIndex(key, email) {
        let hash = this.md5.createHash(email);
        this.ref.child('user_index/' + hash).set(key);
    }
}