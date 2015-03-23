'use strict';
/*jshint esnext: true */

var moduleName = 'timeKeeper.auth.SignInCtrl';

class SignInCtrl {
  constructor (Auth, Session) {
    this.submit = function(user){
      Auth.auth()
        .$authWithPassword({email: user.email, password: user.password})
          .then(function(authData){
            //console.log(authData);
            console.log(Session)
            Session.create(authData.uid, authData.token);
            console.log(Session.id)
          }).catch(function(error){
            console.log(error)
          })
    }
  }
}

SignInCtrl.$inject = ['Auth', 'Session'];
angular.module(moduleName, []).controller('signInCtrl', SignInCtrl);
export default moduleName;
