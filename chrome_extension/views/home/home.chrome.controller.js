'use strict';

(function () {

  function homeController(Notes, Authentication, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();

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
    .controller('homeController', ['Notes', 'Authentication', 'activeTabUrl', 'activeTabDomain', homeController])

}());
