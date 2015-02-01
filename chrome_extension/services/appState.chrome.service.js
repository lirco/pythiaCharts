(function () {

  function AppState() {

    var self = this;
    self.activeNote = {};
    self.activeTabUrl = '';

    //This will not call until the service is called. So, it has to be in a Provider and added to app's config
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
      self.activeTabUrl = tabs[0].url;
    });

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
