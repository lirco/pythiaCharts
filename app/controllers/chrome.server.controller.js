'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

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


//exports.load = function(req, res) {
//  res.send('some html yo yo yo ');
//};

//exports.load = function(req, res) {
//  res.render('index', {
//    user: req.user || null
//  });
//};

//exports.load = function(req, res) {
//  res.redirect('http://www.google.com')
//};

exports.load = function(req, res) {
  res.redirect('/')
};