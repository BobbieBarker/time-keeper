'use strict';

import authCtrlModule from './sign-in-ctrl';
import configModule from './config';
var moduleName = 'timeKeeper.auth';

angular.module(moduleName, [
  configModule,
  authCtrlModule
]);

export default moduleName;
