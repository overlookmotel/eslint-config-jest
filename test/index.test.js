/* --------------------
 * @overlookmotel/eslint-config-jest module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfigJest = require('../index.js');

// Tests

it('Exports an object', () => { // eslint-disable-line jest/lowercase-name
	expect(eslintConfigJest).toBeObject();
});
