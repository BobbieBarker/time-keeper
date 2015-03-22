'use strict';
import {default as fireBaseAuthModule} from './fire-base-auth';
var moduleName = 'timeKeeper.firebase';

angular.module(moduleName, [
  fireBaseAuthModule,
  'firebase'
]);

export default  moduleName;
