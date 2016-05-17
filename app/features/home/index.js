import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes.js';
import homeController from './home.controller.js';

export default angular.module('app.home', [uirouter]).config(routing)
    .controller("HomeController", homeController).name;