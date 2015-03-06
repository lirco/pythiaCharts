'use strict';

(function () {

  function homeController($scope, $state, Notes, Authentication, AppState, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    //TODO: move this to config page
    self.viewState = 'Page';
    self.notesToShow = null;

    self.switchViewState = function(viewState){
      if (viewState == 'Page') {
        self.viewState = 'Page';
        self.notesToShow = self.urlNotes;
      } else if (viewState == 'Site'){
        self.viewState = 'Site';
        self.notesToShow = self.domainNotes;
      }
    };

    self.domainNotes = [];
    self.urlNotes = [];

    self.generateUrlNotes = function (domainNotes, callback) {
      self.urlNotes = [];
      for (var i=0; i < domainNotes.length; i++) {
        var note = domainNotes[i];
        if (note.url == activeTabUrl) {
          self.urlNotes.push(note);
        }
      }
      console.log('***************************************');
      console.log('urlNotes' + self.urlNotes);
      console.log('***************************************');
      if (callback) {
        callback();
      }
    };

    Notes.getNotes({domain: activeTabDomain}, function(notes) {
      self.domainNotes = notes;
      self.generateUrlNotes(notes, self.defineNotesToShow())
    });


    self.defineNotesToShow = function() {
      if (self.viewState == 'Page') {
        self.notesToShow = self.urlNotes;
      } else if (self.viewState == 'Site') {
        self.notesToShow = self.domainNotes;
      }
      console.log('***************************************');
      console.log('To show ' + self.notesToShow);
      console.log('***************************************');
    };

    //$scope.$on('viewEvent:changeViewState', function(type, data){
    //  self.viewState = data;
    //  self.defineNotesToShow()
    //});

    self.editNote = function(note) {
      AppState.setActiveNote(note);
      $state.go('editNote')
    };

    self.deleteNote = function(note) {
      note.$remove();

      for (var i in self.domainNotes) {
        if (self.domainNotes[i] === note) {
          self.domainNotes.splice(i,1);
          self.generateUrlNotes(self.domainNotes, self.defineNotesToShow());
        }
      }
    };

  }

  angular.module('drops')
    .controller('homeController', ['$scope','$state', 'Notes', 'Authentication','AppState' , 'activeTabUrl', 'activeTabDomain', homeController])

}());
