(function () {

  function mainController($http, $state, Authentication, AppState) {

    var self = this;
    self.authentication = {};

    self.activeTabUrl = '';

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {

      var uri = tabs[0].url;
      var domain = uri.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1].split(".").splice(1).join('.');
      self.activeTabUrl = uri;
      AppState.setActiveTabUrl(uri);
      AppState.setActiveTabDomain(domain);

      $http({
        method:'get',
        url:'http://localhost:3000/chromeIndex'
      })
        .then(function(response) {
          Authentication.setUser(response.data.user);
          self.authentication.user = Authentication.getUser()
        })
        .then(function(){
          if (self.authentication.user !==null) {
            $state.go('home');
          } else {
            $state.go('signIn');
          }
        })
    });

  }

  angular.module('drops')
    .controller('mainController', ['$http', '$state', 'Authentication','AppState', mainController])

}());
