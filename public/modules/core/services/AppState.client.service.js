(function () {

  function AppState(Authentication) {

    var self = this;
    self.userTags = Authentication.user.tags;
    self.chosenTags = [];

    return {
      setChosenTags : function(tag) {

      }
    }

  }

  angular.module('core')
    .controller('AppState', ['Authentication', AppState])

}());
