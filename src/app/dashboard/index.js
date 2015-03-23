'use strict';

import {default as configModule} from './config';
import {default as dashBoardCtrlModule} from './dashboard-ctrl';

var moduleName = 'timeKeeper.dashboard';

angular.module(moduleName, [
  configModule,
  dashBoardCtrlModule
]);

export default moduleName;
