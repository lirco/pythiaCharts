'use strict';



(function () {

	function homeController(Authentication, Notes) {

		var self = this;
		self.authentication = Authentication;
		self.notes = Notes.query();

		self.tags = self.authentication.user.tags;

	}

	angular.module('core')
		.controller('homeController', ['Authentication', 'Notes', homeController])

}());
