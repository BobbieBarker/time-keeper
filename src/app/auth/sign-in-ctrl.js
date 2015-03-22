'use strict';
/*jshint esnext: true */

var moduleName = 'timeKeeper.auth.SignInCtrl';

class SignInCtrl {
  constructor (Auth) {
    this.submit = function(user){
      Auth.auth()
        .$authWithPassword({email: user.email, password: user.password})
          .then(function(authData){
            console.log(authData);
          }).catch(function(error){
            console.log(error)
          })
    }
  }
}

SignInCtrl.$inject = ['Auth'];
angular.module(moduleName, []).controller('signInCtrl', SignInCtrl);
export default moduleName;
