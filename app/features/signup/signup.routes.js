export default function routes($stateProvider) {
    $stateProvider
        .state('signup', {
            url: '/signup',
            template: require('./signup.html'),
            controller: 'SignUpController',
            controllerAs: 'signUp'
        })
}