'use strict';
var moduleName = 'timeKeeper.firebase.trapperKeeper';

class FireBaseRef {
  constructor($firebaseAuth, Firebase){
    var url = 'https://trapper-keeper.firebaseio.com';
    //var testy = new Firebase(url);
    //console.log('up here steve', testy);
    //this.ref = new Firebase(url)
    //console.log(this.ref)
  }
};

FireBaseRef.$inject = ['$firebaseAuth', 'Firebase']
angular.module(moduleName, []).service('fireBaseRef', FireBaseRef);
export default moduleName;
