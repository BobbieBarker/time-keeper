'use strict';

var moduleName = 'timeKeeper.dashboard.dashboardCtrl';

class DashBoardCtrl {
  constructor(currentAuth){
    this.today = moment().toISOString();
  }
}

DashBoardCtrl.$inject = ['currentAuth']
angular.module(moduleName, []).controller('dashBoardCtrl', DashBoardCtrl);
export default moduleName;
