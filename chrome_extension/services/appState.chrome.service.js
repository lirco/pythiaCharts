(function () {

  function AppState() {
    var self = this;
    self.activeNote = {};
    //self.notesForThisUrl = [];

    return {
      setActiveNote: function(note) {
        self.activeNote = note
      },
      getActiveNoteL: function() {
        return self.activeNote;
      }
    }
  }

  angular.module('drops')
    .factory('AppState', [AppState])

}());
