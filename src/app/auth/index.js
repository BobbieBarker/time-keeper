'use strict';

import {default as authCtrlModule} from './sign-in-ctrl';
import {default as configModule} from './config';
var moduleName = 'timeKeeper.auth';

angular.module(moduleName, [
  configModule,
  authCtrlModule
]);

export default moduleName;
