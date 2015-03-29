'use strict';
class CurrentDayCtrl {
  constructor(){
    console.log(this.cardList, 'fook')
    this.update = function(entry, period){
      if(_.isEqual('start', period)){
        entry.start = moment().toISOString();
        this.cardList.$save(entry);
      }
    }
  }
};
var moduleName = 'timeKeeper.dashboard.currentDay';
angular.module(moduleName, [])
  .directive('currentDay', function(){
    return {
      restrict: 'E',
      scope: {
        cardList: '=',
      },
      templateUrl: 'app/dashboard/html/current-day-directive.html',
      controller: 'currentDayCtrl as currentday',
      bindToController: true,
    }
  }).controller('currentDayCtrl', CurrentDayCtrl);


export default moduleName;
