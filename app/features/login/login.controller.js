export default class LoginController {
    constructor($state, LoginService) {
        this.$state = $state;
        this.loginService = LoginService;
        this.ref = new Firebase("to-do-app2.firebaseio.com");
    }

    register() {
        this.$state.go("signup");
    }
    
    login() {
        this.loginService.login(this.email);
    }
}