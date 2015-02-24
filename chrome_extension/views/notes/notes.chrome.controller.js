'use strict';

(function () {

  function notesController($stateParams, $state, Authentication, Notes, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    self.activeTabUrl = activeTabUrl;
    self.activeTabDomain = activeTabDomain;

    self.create = function() {
      //TODO: created and updated fields are generated by Mongo middleware
      var note = new Notes({
        url: self.activeTabUrl,
        domain: self.activeTabDomain,
        title: self.title,
        content: self.content,
        tags: self.tags
      });
      note.$save(function(response) {
        $state.go('home');
        //TODO: create a service that holds the notes for current url and pull it's notes on homeCtrl
        self.title = '';
        self.content = '';
        self.tags = '';
      }, function(errorResponse) {
        self.error = errorResponse.data.message;
      })
    };

    self.remove = function(note) {
      if (note) {
        note.$remove();

        for (var i in self.notes) {
          if (self.notes[i] === note) {
            self.notes.splice(i,1);
          }
        }
      } else {
        self.note.$remove(function() {
          $state.go('home');
        });
      }
    };

    self.update = function() {
      var note = self.note;

      note.$update(function() {
        $state.go('home');
      }, function(errorResponse) {
        self.error = errorResponse.data.message;
      });
    };

    self.find = function() {
      self.notes = Notes.query();
    };

    self.findOne = function() {
      self.note = Notes.get({
        noteId: $stateParams.noteId
      });
    };

  }

  angular.module('drops')
    .controller('notesController', ['$stateParams', '$state', 'Authentication', 'Notes', 'activeTabUrl', 'activeTabDomain', notesController])

}());
