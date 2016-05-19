export default class LoginController {
    constructor($state, LoginService) {
        this.$state = $state;
        this.loginService = LoginService;
    }

    register() {
        this.$state.go("signup");
    }
    
    login() {
        this.loginService.login(this.email);
    }
}