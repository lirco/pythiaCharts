(function () {

  function mainController(http, state, Authentication) {
    var self = this;
    self.hello = "hello drops";
    http({
      method:'get',
      url:'http://localhost:3000/chromeIndex'
    })
      .then(function(response) {
        Authentication.setUser(response.data.user);
        self.user = Authentication.getUser()
      })
      .then(function(){
        if (self.user !==null) {
          state.go('home')
        } else {
          state.go('signIn')
        }
      })
  }

  angular.module('drops')
    .controller('mainController', ['$http', '$state', 'Authentication', mainController])

}());