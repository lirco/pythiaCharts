(function () {

  function mainController(http, state) {
    var self = this;
    self.hello = "hello drops";
    http({
      method:'get',
      url:'http://localhost:3000/chromeIndex'
    })
      .then(function(response) {
        self.user = response.data.user;
        self.message = response.data.message;
      })
      .then(function(){
        if (self.user !==null) {
          state.go('home')
        } else {
          state.go('signin')
        }
      })
  }

  angular.module('drops')
    .controller('mainController', ['$http', '$state', mainController])

}());