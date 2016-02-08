'use strict';
import {default as fireBaseAuthModule} from './fire-base-auth';
import {default as fireBaseSessionModule} from './session';
import {default as fireBaseRefModule} from './fire-base-ref';
import {default as fireBaseTimeCardModule} from './time-card';

var moduleName = 'timeKeeper.firebase';

angular.module(moduleName, [
  fireBaseAuthModule,
  fireBaseSessionModule,
  fireBaseRefModule,
  fireBaseTimeCardModule,
]);

export default moduleName;
