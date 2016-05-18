export default class HomeController {
    constructor(LoginService) {
        this.loginService = LoginService;
    }
    
    logout() {
        this.loginService.logout();
    }
}