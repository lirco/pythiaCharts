'use strict';

(function () {

  function homeController(Notes, Authentication, activeTabUrl, activeTabDomain, domainNotes) {
    var self = this;
    self.authentication = {};
    self.authentication.user = Authentication.getUser();
    self.activeTabUrl = activeTabUrl;
    self.activeTabDomain = activeTabDomain;

    self.domainNotes = domainNotes;
    self.urlNotes = [];
    console.log('***************************************');
    console.log('DOMAIN NOTES: '+ domainNotes);
    console.log('***************************************');
    for (var i=0; i < self.domainNotes.length; i++) {
      var note = self.domainNotes[i];
      console.log('***************************************');
      console.log(note);
      console.log('***************************************');
      if (note.url = self.activeTabUrl) {
        self.urlNotes.push(note);
      }
    }

    console.log('***************************************');
    console.log(self.urlNotes);
    console.log('***************************************');

  }

  angular.module('drops')
    .controller('homeController', ['Notes', 'Authentication', 'activeTabUrl', 'activeTabDomain', 'domainNotes', homeController])

}());
