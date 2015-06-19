'use strict';



(function () {

	function homeController(Authentication, Notes) {

		var self = this;
		var selectedTags = [];
		self.authentication = Authentication;
		self.notes = Notes.query();

		self.tags = self.authentication.user.tags;

		self.click = function(tag) {
			var index = -1;
			for (var i=0; i < selectedTags.length ; i++) {
				if (selectedTags[i] == tag) {
					index = i;
					break;
				}
			}
			if (index == -1) {
				selectedTags.push(tag)
			} else {
				selectedTags.splice(index,1);
			}
		};

		self.sortOrder = ['-modified'];
		//self.byTagsFilter =

	}

	angular.module('core')
		.controller('homeController', ['Authentication', 'Notes', homeController])

}());
