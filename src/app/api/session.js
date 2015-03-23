'use strict';

var moduleName = 'timeKeeper.auth.Session';


class Session {
  constructor($window){
    var PREFIX = 'chadtools-auth-';
    this.props = {};
    var self = this;

    this.set = function(key, value) {
      this.props[key] = value;
      $window.sessionStorage.setItem(PREFIX + key, value);
    };

    this.get = function(key) {
      return this.props[key] || $window.sessionStorage.getItem(PREFIX + key);
    };

    this.create = function (id, firebaseToken) {
      this.set('id', id);
      this.set('firebaseToken', firebaseToken);
    };

    this.remove = function(key) {
      delete this.props[key];
      $window.sessionStorage.removeItem(key);
    };

    this.destroy = function () {
      this.remove('id');
      this.remove('token');
    };

    this.logout = function(){
      angular.forEach(_.keys($window.sessionStorage), function(key) {
        if(key.lastIndexOf(PREFIX, 0) === 0) {
          self.remove(key);
        }
      });
      this.destroy();
    };
  }
  get id(){
    return this.get('id');
  }
}

Session.$inject = ['$window'];
angular.module(moduleName, []).service('Session', Session);
export default moduleName;
