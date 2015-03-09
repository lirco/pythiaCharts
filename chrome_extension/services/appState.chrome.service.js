(function () {

  function AppState() {

    var self = this;
    self.activeNote = {};
    self.activeTabUrl = '';
    self.activeTabDomain = '';
    self.viewState = 'Page';

    return {
      setActiveTabUrl: function(url) {
        self.activeTabUrl = url
      },
      getActiveTabUrl: function() {
        return self.activeTabUrl;
      },
      setActiveTabDomain: function(domain) {
        self.activeTabDomain = domain;
      },
      getActiveTabDomain: function() {
        return self.activeTabDomain;
      },
      setActiveNote: function(note) {
        self.activeNote = note
      },
      getActiveNote: function() {
        return self.activeNote;
      },
      setViewState: function(viewState) {
        self.viewState = viewState
      },
      getViewState: function() {
        return self.viewState;
      }
    }
  }

  angular.module('drops')
    .factory('AppState', [AppState])

}());
