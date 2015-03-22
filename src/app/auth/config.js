'use strict';

var moduleName = 'timeKeeper.auth.config';

angular.module(moduleName, [])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'app/auth/html/main.html',
        controller: 'signInCtrl',
        controllerAs: 'signIn'
      });
      $urlRouterProvider.otherwise('/sign-in');
  });

export default moduleName;
