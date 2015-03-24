'use strict';

var moduleName = 'timeKeeper.dashboard.dashboardCtrl';

class DashBoardCtrl {
  constructor(currentAuth, timeCardList){
    console.log(timeCardList)
    this.day = {start: null, lunch_out: null, lunch_in: null, end: null};
    this.today = moment().toISOString();

    this.enterTime = function(){
      if(_.isNull(this.day.start)){
        this.day.start = moment().toISOString();
      } else if(_.isNull(this.day.lunch_out)){
        this.day.lunch_out = moment().toISOString();
      }else if(_.isNull(this.day.lunch_in)){
        this.day.lunch_in = moment().toISOString();
      } else if(_.isNull(this.day.end)){
        this.day.end = moment().toISOString();
      }
      console.log(this.day)
      timeCardList.$add(this.day);
    }
  }
}

DashBoardCtrl.$inject = ['currentAuth', 'timeCardList']
angular.module(moduleName, []).controller('dashBoardCtrl', DashBoardCtrl);
export default moduleName;
