'use strict';

(function () {

  function homeController($scope, $state, Authentication, AppState, domainNotes, urlNotes, viewState) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();

    self.viewState = viewState;
    self.domainNotes = domainNotes;
    self.urlNotes = urlNotes;

    self.switchViewState = function(viewState){
      AppState.setViewState(viewState);
      if (viewState == 'Page') {
        self.viewState = 'Page';
        self.notesToShow = self.urlNotes;
      } else if (viewState == 'Site'){
        self.viewState = 'Site';
        self.notesToShow = self.domainNotes;
      }
    };

    self.defineNotesToShow = function() {
      if (self.viewState == 'Page') {
        self.notesToShow = self.urlNotes;
      } else if (self.viewState == 'Site') {
        self.notesToShow = self.domainNotes;
      }
    };

    self.defineNotesToShow();

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
        }
        if (self.urlNotes[i] && self.urlNotes[i] === note) {
          self.urlNotes.splice(i,1);
        }
      }
      self.defineNotesToShow();
    };
  }

  angular.module('drops')
    .controller('homeController', ['$scope','$state','Authentication','AppState','domainNotes', 'urlNotes', 'viewState', homeController])

}());
