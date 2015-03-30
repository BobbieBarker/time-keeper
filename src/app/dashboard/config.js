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
          },
          timeCardList: function(timeCard, newDay){
            return timeCard.timeCardList().$loaded().then(data => {
              return newDay.addDay(data).then(data => {
                return data;
              });
            });
          }
        }
      });
  });

export default moduleName;
