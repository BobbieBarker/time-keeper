'use strict';
/*jshint esnext: true */

import NavbarCtrl from '../components/navbar/navbar.controller';
import {default as fireBaseModuleName} from './api/index';
import {default as authModuleName} from './auth/index';

angular.module('timeKeeper', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ui.router',
'ngMaterial',
fireBaseModuleName,
authModuleName])
  .controller('NavbarCtrl', NavbarCtrl);
