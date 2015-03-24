'use strict';
//import {BASE_URL} from './fire-base-ref';
var moduleName = 'timeKeeper.firebase.timeCard';

class TimeCard {
  constructor($firebaseArray, Ref){
    this.timeCardList = function(){
      return $firebaseArray(Ref.firebase.child('timeCards'));
    }
    this.timeCard = function(){

    }
  }
}
TimeCard.$inject = ['$firebaseArray', 'Ref'];
angular.module(moduleName, []).service('timeCard', TimeCard);
export default moduleName;
