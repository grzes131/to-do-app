import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes.js';
import homeController from './home.controller.js';
import homeService from './home.service.js';

export default angular.module('app.home', [uirouter]).config(routing)
    .controller("HomeController", homeController)
    .service("HomeService", homeService).name;