'use strict';
var moduleName = 'timeKeeper.dashboard.dashboardCtrl';
class DashBoardCtrl {
  constructor(currentAuth, timeCardList){
    this.today = moment().toISOString();
    this.timeCardList = timeCardList;

  }
}

DashBoardCtrl.$inject = ['currentAuth', 'timeCardList'];
angular.module(moduleName, []).controller('dashBoardCtrl', DashBoardCtrl);
export default moduleName;
