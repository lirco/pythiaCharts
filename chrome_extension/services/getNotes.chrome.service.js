(function () {

  function getNotes(Notes, AppState) {

    var self = this;
    self.domainNotes = [];
    self.urlNotes = [];

    Notes.getNotes({domain: AppState.getActiveTabDomain()}, function(notes) {
      self.domainNotes = notes;
      self.generateUrlNotes(notes)
    });

    self.generateUrlNotes = function(domainNotes) {
      self.urlNotes = [];
      for (var i=0; i < domainNotes.length; i++) {
        var note = domainNotes[i];
        if (note.url == AppState.getActiveTabUrl()) {
          self.urlNotes.push(note);
        }
      }
      console.log('************************************');
      console.log('yo generateUrlNotes');
      console.log('************************************');
    };

    return {
      getDomainNotes: function() {
        return self.domainNotes;
      },
      getUrlNotes: function() {
        return self.urlNotes;
      }
    }

  }

  angular.module('drops')
    .factory('GetNotes', ['Notes','AppState', getNotes])
}());
