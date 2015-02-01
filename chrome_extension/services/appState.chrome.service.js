(function () {

  function AppState() {

    var self = this;
    self.activeNote = {};
    self.activeTabUrl = '';


    //self.notesForThisUrl = [];

    return {
      setActiveTabUrl: function(url) {
        self.activeTabUrl = url
      },
      getActiveTabUrl: function() {
        return self.activeTabUrl;
      },
      setActiveNote: function(note) {
        self.activeNote = note
      },
      getActiveNote: function() {
        return self.activeNote;
      }
    }
  }

  angular.module('drops')
    .factory('AppState', [AppState])

}());
