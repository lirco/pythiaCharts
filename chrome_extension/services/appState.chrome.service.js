(function () {

  function AppState() {

    var self = this;
    self.activeNote = {};
    self.activeTabUrl = '';

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
      self.activeTabUrl = tabs[0].url;
    });

    console.log('***************************************');
    console.log(self.activeTabUrl);
    console.log('***************************************');


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
