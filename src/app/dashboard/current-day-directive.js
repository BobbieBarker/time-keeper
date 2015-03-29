'use strict';
class CurrentDayCtrl {
  constructor(){
    this.update = function(entry, period){
      console.log(entry, 'blah blah')
      if(_.isEqual('start', period)){
        entry.start = moment().toISOString();
      }else if(_.isEqual('lunch_out', period)){
        entry.lunch_out = moment().toISOString();
      }else if(_.isEqual('lunch_in', period)){
        entry.lunch_in = moment().toISOString();
      }else if(_.isEqual('stop', period)){
        entry.stop = moment().toISOString();
      }
      this.cardList.$save(entry);
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
