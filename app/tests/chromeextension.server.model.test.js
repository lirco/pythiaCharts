'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Chromeextension = mongoose.model('Chromeextension');

/**
 * Globals
 */
var user, chromeextension;

/**
 * Unit tests
 */
describe('Chromeextension Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			chromeextension = new Chromeextension({
				name: 'Chromeextension Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return chromeextension.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			chromeextension.name = '';

			return chromeextension.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Chromeextension.remove().exec();
		User.remove().exec();

		done();
	});
});