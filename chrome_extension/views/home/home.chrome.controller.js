'use strict';

(function () {

  function homeController($scope, Notes, Authentication, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    //TODO: move this to config page
    self.viewState = 'Page';

    $scope.$on('viewEvent:changeViewState', function(type, data){
      self.viewState = data;
      if (self.viewState == 'Page' ){
        self.notesToShow = self.urlNotes;
      } else if (self.viewState == 'Site') {
        self.notesToShow = self.domainNotes;
      }
    });

    self.urlNotes = [];
    self.domainNotes = [];

    Notes.getNotes({domain: activeTabDomain}, function(notes) {
      self.domainNotes = notes;
      for (var i=0; i < notes.length; i++) {
        var note = notes[i];
        if (note.url == activeTabUrl) {
          self.urlNotes.push(note);
        }
      }
    });

    //TODO: move this to config page
    self.notesToShow = self.urlNotes;

  }

  angular.module('drops')
    .controller('homeController', ['$scope', 'Notes', 'Authentication', 'activeTabUrl', 'activeTabDomain', homeController])

}());
