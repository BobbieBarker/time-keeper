'use strict';
/*jshint esnext: true */

import NavbarCtrl from '../components/navbar/navbar.controller';
import {default as fireBaseModuleName} from './api/index';
import {default as authModuleName} from './auth/index';
import {default as dashboardModule} from './dashboard/index';

angular.module('timeKeeper', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ui.router',
'ngMaterial',
fireBaseModuleName,
authModuleName,
dashboardModule])
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('mainCtrl', function($scope, $rootScope, $state){
    console.log('the cheesiest')
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error)
      if (_.isEqual(error, 'AUTH_REQUIRED')) {
        $state.go('sign-in');
      }
    });
  })
