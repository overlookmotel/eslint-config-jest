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

it('Exports an object', () => {
	expect(eslintConfigJest).to.be.an('object');
});
