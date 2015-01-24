angular.module('drops', ['ui.router'])
  .config(function ($stateProvider) {

  $stateProvider
    // simple state with template
    .state('main', {
      templateUrl: 'views/main/main.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })

});

// use the $state service to navigate to specific state
angular.module('drops')
  .run(function ($state) {
    $state.go('main');
  });