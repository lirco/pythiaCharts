(function () {

  function sidebarController(scope) {

    scope.tags = [
      {text:'tag1'},
      {text:'tag2'},
      {text:'tag3'},
      {text:'tag4'}
    ]

  }

  angular.module('drops')
    .controller('sidebarController', ['$scope', sidebarController])

}());
