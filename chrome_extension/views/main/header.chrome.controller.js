'use strict';

(function () {

  function HeaderController(http, state, Authentication) {

    var self = this;
    self.authentication = {};

    self.authentication.user = Authentication.getUser();

    self.signOut = function() {
      http({
        method:'get',
        url:'http://localhost:3000/auth/signout'
      })
        .then(function(response) {
          Authentication.removeUser();
        })
        .then(function(){
          state.go('signIn');
        });
    }
  }

  angular.module('drops')
    .controller('HeaderController', ['$http', '$state', 'Authentication', HeaderController])

}());