import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './statistics.routes';
import StatisticsController from './statistics.controller';

export default angular.module('app.statistics', [uirouter]).config(routing)
    .controller("StatisticsController", StatisticsController).name;
