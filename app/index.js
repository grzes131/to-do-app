import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

const ngModule = angular.module('app', [uirouter]).config(routing);