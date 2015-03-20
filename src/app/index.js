'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import {default as fireBaseModuleName} from './api/index';

angular.module('timeKeeper', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ui.router',
'ngMaterial',
fireBaseModuleName])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
