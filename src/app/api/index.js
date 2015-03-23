'use strict';
import {default as fireBaseAuthModule} from './fire-base-auth';
import {default as fireBaseSessionModule} from './session';
var moduleName = 'timeKeeper.firebase';

angular.module(moduleName, [
  fireBaseAuthModule,
  fireBaseSessionModule,
  'firebase'
]);

export default  moduleName;
