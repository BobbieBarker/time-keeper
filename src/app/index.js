import 'angular-material/angular-material.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import angularfire from 'angularfire';

import NavbarCtrl from '../components/navbar/navbar.controller';
import {default as fireBaseModuleName} from './api/index';
import {default as authModuleName} from './auth/index';
import {default as dashboardModule} from './dashboard/index';


angular.module('timeKeeper', [
ngAnimate,
ngCookies,
ngTouch,
ngSanitize,
uirouter,
ngMaterial,
fireBaseModuleName,
authModuleName,
dashboardModule,
angularfire
])
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('mainCtrl', function($scope, $rootScope, $state){
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error);
      if (_.isEqual(error, 'AUTH_REQUIRED')) {
        $state.go('sign-in');
      }
    });
  });
