'use strict';

var moduleName = 'timeKeeper.dashboard.config';

angular.module(moduleName, [])
  .config(function($stateProvider){
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/html/dashboard-ctrl.html',
        controller: 'dashBoardCtrl as dashboard',
        resolve: {
          currentAuth: function(Auth){
            return Auth.auth().$requireAuth();
          }
        }
      });
  });

export default moduleName;
