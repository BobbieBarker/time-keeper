'use strict';

const BASE_URL = 'https://trapper-keeper.firebaseio.com';
var moduleName = 'timeKeeper.firebase.ref';

class Ref {
  get firebase(){
    return new Firebase(BASE_URL)
  }
}

angular.module(moduleName, []).service('Ref', Ref);
export default moduleName;
