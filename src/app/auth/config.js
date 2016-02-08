'use strict';
var moduleName = 'timeKeeper.auth.config';
import main from './html/main.html'

angular.module(moduleName, [])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        template: main,
        controller: 'signInCtrl',
        controllerAs: 'signIn'
      });
      $urlRouterProvider.otherwise('/sign-in');
  });

export default moduleName;
