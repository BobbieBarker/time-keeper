'use strict';
import {BASE_URL} from './fire-base-ref';
var moduleName = 'timeKeeper.firebase.auth';

class Auth {
  constructor($firebaseAuth){
    var ref = new Firebase(BASE_URL);
    this.auth = function(){
      return $firebaseAuth(ref);
    };
  }
}

Auth.$inject = ['$firebaseAuth'];
angular.module(moduleName, []).service('Auth', Auth);
export default moduleName;
