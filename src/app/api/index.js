'use strict';
import fireBaseAuthModule from './fire-base-auth';
import fireBaseSessionModule from './session';
import fireBaseRefModule from './fire-base-ref';
import fireBaseTimeCardModule from './time-card';

var moduleName = 'timeKeeper.firebase';

angular.module(moduleName, [
  fireBaseAuthModule,
  fireBaseSessionModule,
  fireBaseRefModule,
  fireBaseTimeCardModule,
]);

export default moduleName;
