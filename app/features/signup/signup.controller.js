export default class SignUpController {
    constructor(SignUpService) {
        this.signUpService = SignUpService;
    }

    register() {
        this.signUpService.registerUser(this.email);
    }
}