angular.module('drops', ['ui.router'])
  .config(function ($stateProvider) {

  $stateProvider

    .state('home', {
      templateUrl: 'views/home/home.chrome.view.html'
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

});
