'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

exports.chromeIndex = function(req, res) {
  if (req.user) {
    res.send({
      user: req.user
    });
  } else {
    res.send({
      user: null
    });
  }


};
