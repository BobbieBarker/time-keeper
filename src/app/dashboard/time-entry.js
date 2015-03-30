'use strict';
var moduleName = 'timeKeeper.dashboard.timeentry';
class TimeEntryCtrl {
  constructor(){
    this.update = function(entry){
      console.log(entry, this.type, 'blah')
      if(_.isEqual('start', this.type)){
        entry.start = moment().toISOString();
      }else if(_.isEqual('lunch_out', this.type)){
        entry.lunch_out = moment().toISOString();
      }else if(_.isEqual('lunch_in', this.type)){
        entry.lunch_in = moment().toISOString();
      }else if(_.isEqual('stop', this.type)){
        entry.stop = moment().toISOString();
      }
      this.timeCardList.$save(entry);
    };
  }
}

angular.module(moduleName, [])
  .directive('timeEntry', function(){
    return {
      restrict: 'E',
      scope: {
        time: '=',
        timeCardList: '=',
        type: '@'
      },
      templateUrl: 'app/dashboard/html/time-entry.html',
      controller: 'timeEntryCtrl as timeentry',
      bindToController: true,
    };
  }).controller('timeEntryCtrl', TimeEntryCtrl);
  export default moduleName;
