'use strict';

(function () {

  function homeController(Authentication, activeTabUrl) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    self.activeTabUrl = activeTabUrl;

  }

  angular.module('drops')
    .controller('homeController', ['Authentication', 'activeTabUrl', homeController])

}());
