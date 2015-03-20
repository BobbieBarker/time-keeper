import {default as fireBaseRefModule} from './fire-base-ref';
import {default as fireBaseAuthModule} from './fire-base-auth';
var moduleName = 'timeKeeper.firebase';

angular.module(moduleName, [
  fireBaseRefModule,
  fireBaseAuthModule,
  'firebase'
  ])

export default  moduleName
