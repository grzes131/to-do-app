import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes.js';
import homeController from './home.controller.js';
import homeService from './home.service.js';
import activeTab from './directives/active_tab';
import allTasksTab from './directives/all_tasks_tab';
import completedTab from './directives/completed_tab';
import todoInput from './directives/todo_input';

export default angular.module('app.home', [uirouter]).config(routing)
    .controller("HomeController", homeController)
    .service("HomeService", homeService)
    .directive('activeTab', activeTab)
    .directive('allTasksTab', allTasksTab)
    .directive('completedTab', completedTab)
    .directive('todoInput', todoInput)
    .name;