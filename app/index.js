import './style.css';
import 'angular-material/angular-material.min.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import angularMaterial from 'angular-material';
import angularMD5 from 'angular-md5';
import firebase from 'firebase';
import angularFire from 'angularfire';
import routing from './app.config';

import home from './features/home';
import singUp from './features/signup';
import login from './features/login';

const ngModule = angular.module('app', [angularFire, uirouter, angularMaterial, angularMD5, home, singUp, login])
    .config(routing);