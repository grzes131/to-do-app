import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './login.routes';
import loginController from './login.controller';
import loginService from './login.service';

export default angular.module('app.login', [uirouter]).config(routing)
    .controller("LoginController", loginController)
    .service("LoginService", loginService).name;
