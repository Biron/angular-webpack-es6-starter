import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import CommonModule from './common/main';
import MainModule from './modules/main/main';

import TokenInterceptor from './common/interceptors/common.interceptor';
import Config from './configs/constants.config';
import EventsConfig from './configs/events.config';

import '../style/app.css';
import '../style/index.scss';

const MODULE_NAME = 'App';

angular.module(MODULE_NAME, [uiRouter, ngResource, CommonModule, MainModule])
    .constant('Config', Config)
    .run(EventsConfig)
    .factory('TokenInterceptor', TokenInterceptor)
    /* @ngInject */
    .config(($httpProvider, $locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('TokenInterceptor');
    });

angular.bootstrap(document, [MODULE_NAME]);