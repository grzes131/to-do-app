export default class LoginController {
    constructor($state) {
        this.$state = $state;
    }

    register() {
        this.$state.go("signup");
    }
}