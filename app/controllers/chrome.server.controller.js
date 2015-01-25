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
    })
  }


};

/**
 * Create a Chromeextension
 */
exports.create = function(req, res) {

};

/**
 * Show the current Chromeextension
 */
exports.read = function(req, res) {

};

/**
 * Update a Chromeextension
 */
exports.update = function(req, res) {

};

/**
 * Delete an Chromeextension
 */
exports.delete = function(req, res) {

};

/**
 * List of Chromeextensions
 */
exports.list = function(req, res) {

};
