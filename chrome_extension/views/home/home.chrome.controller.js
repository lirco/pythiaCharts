'use strict';

(function () {

  function homeController($scope, Notes, Authentication, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    self.viewState = 'Page';

    $scope.$on('viewEvent:changeViewState', function(event, type){
      self.viewState = type;
    });

    self.urlNotes = [];

    Notes.getNotes({domain: activeTabDomain}, function(notes) {
      for (var i=0; i < notes.length; i++) {
        var note = notes[i];
        if (note.url == activeTabUrl) {
          self.urlNotes.push(note);
        }
      }
    });

  }

  angular.module('drops')
    .controller('homeController', ['$scope', 'Notes', 'Authentication', 'activeTabUrl', 'activeTabDomain', homeController])

}());
