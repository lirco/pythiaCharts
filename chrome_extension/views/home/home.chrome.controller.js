'use strict';

(function () {

  function homeController(Notes, Authentication, activeTabUrl, activeTabDomain) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    self.activeTabUrl = activeTabUrl;
    self.activeTabDomain = activeTabDomain;

    self.urlNotes = Notes.query({url: self.activeTabUrl});

  }

  angular.module('drops')
    .controller('homeController', ['Notes', 'Authentication', 'activeTabUrl', 'activeTabDomain',homeController])

}());
