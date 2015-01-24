(function () {

  function mainController(scope) {
    this.hello = "hello drops"
  }

  angular.module('drops')
    .controller('mainController', ['$scope', mainController])

}());