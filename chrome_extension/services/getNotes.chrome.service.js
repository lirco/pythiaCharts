(function () {

  function getNotes($q, Notes, AppState) {

    var dDomain = $q.defer();
    var dUrl = $q.defer();

    var self = this;
    self.domainNotes = [];
    self.urlNotes = [];

    Notes.getNotes({domain: AppState.getActiveTabDomain()}, function(notes) {
      dDomain.resolve(notes);
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
      dUrl.resolve(self.urlNotes);
    };

    return {
      getDomainNotes: function() {
        return dDomain.promise;
      },
      getUrlNotes: function() {
        return dUrl.promise;
      }
    }

  }

  angular.module('drops')
    .factory('GetNotes', ['$q','Notes','AppState', getNotes])
}());
