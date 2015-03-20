'use strict';
var moduleName = 'timeKeeper.firebase.auth';

class Auth {
  constructor(fireBaseRef, $firebaseAuth){
    console.log('fook it');
  }
};

Auth.$inject = ['fireBaseRef', '$firebaseAuth'];
angular.module(moduleName, []).service('Auth', Auth);
export default moduleName;
