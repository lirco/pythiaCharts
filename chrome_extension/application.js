angular.module('drops', ['ui.router', 'ngResource', 'ui.bootstrap'])
  .config([

    '$resourceProvider',
    '$stateProvider',

    function ($resourceProvider, $stateProvider) {

    // Don't strip trailing slashes from calculated URLs
    //$resourceProvider.defaults.stripTrailingSlashes = false;


    $stateProvider

      .state('home', {
        templateUrl: 'views/home/home.chrome.view.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl',
        resolve: {
          domainNotes: function(GetNotes) {
            console.log('************************************');
            console.log(GetNotes.getDomainNotes());
            console.log('************************************');
            return GetNotes.getDomainNotes()
          },
          urlNotes: function(GetNotes) {
            console.log('************************************');
            console.log(GetNotes.getUrlNotes());
            console.log('************************************');
            return GetNotes.getUrlNotes()
          },
          viewState: function(AppState) {
            console.log('************************************');
            console.log(AppState.getViewState());
            console.log('************************************');
            return AppState.getViewState()
          }
        }
      })
      .state('newNote', {
        templateUrl: 'views/notes/newNote.chrome.view.html',
        controller: 'notesController',
        controllerAs: 'notesCtrl',
        resolve: {
          activeTabUrl: function(AppState) {
            return AppState.getActiveTabUrl()
          },
          activeTabDomain: function(AppState) {
            return AppState.getActiveTabDomain()
          },
          activeNote: function(AppState) {
            return AppState.getActiveNote()
          }
        }
      })
      .state('editNote', {
        templateUrl: 'views/notes/editNote.chrome.view.html',
        controller: 'notesController',
        controllerAs: 'notesCtrl',
        resolve: {
          activeTabUrl: function(AppState) {
            return AppState.getActiveTabUrl()
          },
          activeTabDomain: function(AppState) {
            return AppState.getActiveTabDomain()
          },
          activeNote: function(AppState) {
            return AppState.getActiveNote()
          }
        }
      })

      //User routes
      .state('signIn', {
        templateUrl: 'views/users/authentication/signIn.chrome.view.html',
        controller: 'authenticationController',
        controllerAs: 'authCtrl'
      })
      .state('signUp', {
        templateUrl: 'views/users/authentication/signUp.chrome.view.html',
        controller: 'authenticationController',
        controllerAs: 'authCtrl'
      })
      .state('forgot', {
        templateUrl: 'views/users/password/forgotPassword.chrome.view.html',
        controller: 'passwordController',
        controllerAs: 'passwordCtrl'
      })
      .state('passwordResetSuccess', {
        templateUrl: 'views/users/password/passwordResetSuccess.chrome.view.html',
        controller: 'passwordController',
        controllerAs: 'passwordCtrl'
      })

}]);
