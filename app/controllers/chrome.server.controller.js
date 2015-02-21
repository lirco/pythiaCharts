'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

exports.chromeIndex = function(req, res) {
  if (req.user && req.user!==null) {
    res.send({
      user: req.user
      //here I should also send the notes on current user's url
    });
  } else {
    res.send({
      user: null
    });
  }


};

