import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './signup.routes';
import signUpController from './signup.controller';
import signUpService from './signup.service';

export default angular.module('app.signup', [uirouter]).config(routing)
    .controller("SignUpController", signUpController)
    .service('SignUpService', signUpService).name;
