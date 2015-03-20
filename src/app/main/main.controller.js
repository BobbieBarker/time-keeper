'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, Auth) {
    console.log('fook you', Auth);
  }
}

MainCtrl.$inject = ['$scope', 'Auth'];

export default MainCtrl;
