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
      templateUrl: 'views/home/home.html'
    })

    .state('signin', {
      templateUrl: 'views/user/signin.html'
    })

});

// use the $state service to navigate to specific state
angular.module('drops')
  .run(function ($state) {
    $state.go('main');
  });