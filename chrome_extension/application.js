angular.module('drops', ['ui.router'])
  .config(function ($stateProvider) {

  $stateProvider
    // simple state with template
    .state('main', {
      templateUrl: 'views/main/main.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })

    .state('home', {
      templateUrl: 'views/home/home.chrome.viewhtml'
    })

    .state('signIn', {
      templateUrl: 'views/users/authentication/signIn.chrome.view.html',
//      controller: 'authenticationController',
//      controllerAs: 'authenticationCtrl'
    })

    .state('signup', {
      templateUrl: 'views/users/authentication/signUp.chrome.view.html',
//      controller: 'authenticationController',
//      controllerAs: 'authenticationCtrl'
    })

});

// use the $state service to navigate to specific state
angular.module('drops')
  .run(function ($state) {
    $state.go('main');
  });