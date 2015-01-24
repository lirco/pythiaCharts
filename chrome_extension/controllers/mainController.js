(function () {

  function mainController(http) {
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
  }

  angular.module('drops')
    .controller('mainController', ['$http', mainController])

}());