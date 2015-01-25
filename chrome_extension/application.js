angular.module('drops', ['ui.router'])
  .config(function ($stateProvider) {

  $stateProvider

    .state('home', {
      templateUrl: 'views/home/home.chrome.view.html'
    })

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

});
