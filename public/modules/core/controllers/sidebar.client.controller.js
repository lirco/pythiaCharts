(function () {

  function sidebarController(scope) {

    var self = this;

    self.click = function(tag) {
      console.log('***************************************');
      console.log('the tag ' + tag.text + ' was clicked!');
      console.log('***************************************');
    }

  }

  angular.module('drops')
    .controller('sidebarController', ['$scope', sidebarController])

}());
