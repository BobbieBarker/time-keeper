'use strict';

import {default as configModule} from './config';
import {default as dashBoardCtrlModule} from './dashboard-ctrl';
import {default as currentDayModule} from './current-day-directive';
import {default as newDayModule} from './new-day-service';
import {default as timeEntryModule} from './time-entry';

var moduleName = 'timeKeeper.dashboard';

angular.module(moduleName, [
  configModule,
  dashBoardCtrlModule,
  currentDayModule,
  newDayModule,
  timeEntryModule
]);

export default moduleName;
