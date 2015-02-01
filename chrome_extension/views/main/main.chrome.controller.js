(function () {

  function mainController($http, $state, Authentication, AppState) {

    var self = this;
    self.authentication = {};

    self.activeTabUrl = '';

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {

      self.activeTabUrl = tabs[0].url;
      AppState.setActiveTabUrl(tabs[0].url);

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
