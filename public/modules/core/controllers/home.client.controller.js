'use strict';

(function () {

	function homeController() {

		var self = this;

		self.data = [
			{name: "Greg", score: 98},
			{name: "Ari", score: 96},
			{name: 'Q', score: 75},
			{name: "Loser", score: 48}
		];

		//self.data2 = [
		//	{city: "DE" , 59319,99496,47414,84464,230183,230528,121688
		//]

	}

	angular.module('core')
		.controller('homeController', [homeController])

}());
