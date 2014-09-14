'use strict';

module.exports = function(app) {
	// Routing logic
  var chrome = require('../../app/controllers/chrome-extension');

  app.route('/chrome').get(chrome.index);
};