(function () {

  function mainController($scope, $http, $state, Authentication) {
    var self = this;
    self.authentication = {};

    $http({
      method:'get',
      url:'http://localhost:3000/chromeIndex'
    })
      .then(function(response) {
        Authentication.setUser(response.data.user);
        self.authentication.user = Authentication.getUser()
      })
      .then(function(){
        if (self.authentication.user !==null) {
          $state.go('home');
        } else {
          $state.go('signIn');
        }
      })
  }

  angular.module('drops')
    .controller('mainController', ['$scope', '$http', '$state', 'Authentication', mainController])

}());