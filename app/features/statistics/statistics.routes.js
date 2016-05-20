export default function routes($stateProvider) {
    $stateProvider
        .state('statistics', {
            url: '/statistics',
            template: require('./statistics.html'),
            controller: 'StatisticsController',
            controllerAs: 'statistics'
        })
}