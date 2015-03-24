'use strict';
/*jshint esnext: true */

var moduleName = 'timeKeeper.auth.SignInCtrl';

class SignInCtrl {
  constructor ($state, Auth, Session) {
    console.log(Auth.auth())
    this.submit = function(user){

      Auth.auth()
        .$authWithPassword({email: user.email, password: user.password})
          .then(function(authData){
            Session.create(authData.uid, authData.token);
            $state.go('dashboard')
          }).catch(function(error){
            console.log(error)
          })
    }
  }
}

SignInCtrl.$inject = ['$state', 'Auth', 'Session'];
angular.module(moduleName, []).controller('signInCtrl', SignInCtrl);
export default moduleName;
