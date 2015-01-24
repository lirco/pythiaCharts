//(function () {
//
//  function authenticationController(scope, http, state, Authentication) {
//    scope.authentication = Authentication.user;
//
//    // If user is signed in then redirect back home
//    if (scope.authentication.user !== null) state.go('home');
//
////    $scope.signup = function() {
////      $http.post('/auth/signup', $scope.credentials).success(function(response) {
////        // If successful we assign the response to the global user model
////        $scope.authentication.user = response;
////
////        // And redirect to the index page
////        $location.path('/');
////      }).error(function(response) {
////        $scope.error = response.message;
////      });
////    };
////
////    $scope.signin = function() {
////      $http.post('/auth/signin', $scope.credentials).success(function(response) {
////        // If successful we assign the response to the global user model
////        $scope.authentication.user = response;
////
////        // And redirect to the index page
////        $location.path('/');
////      }).error(function(response) {
////        $scope.error = response.message;
////      });
////    };
//
//  }
//
//  angular.module('drops')
//    .controller('authenticationController', ['$scope', '$http', '$state', authenticationController])
//
//}());