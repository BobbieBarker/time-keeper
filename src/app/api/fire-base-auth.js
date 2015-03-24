'use strict';

var moduleName = 'timeKeeper.firebase.auth';

class Auth {
  constructor($firebaseAuth, Ref){
    this.auth = function(){
      return $firebaseAuth(Ref.firebase);
    };
  }
}

Auth.$inject = ['$firebaseAuth', 'Ref'];
angular.module(moduleName, []).service('Auth', Auth);
export default moduleName;
