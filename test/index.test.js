/* --------------------
 * @overlookmotel/eslint-config-jest module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	eslintConfigJest = require('../index');

// Init
chai.config.includeStack = true;

// Tests

describe('Tests', function() {
	it.skip('all', function() {
		expect(eslintConfigJest).to.be.ok;
	});
});
