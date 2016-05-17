import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './login.routes';
import loginController from './login.controller';

export default angular.module('app.login', [uirouter]).config(routing)
    .controller("LoginController", loginController).name;
