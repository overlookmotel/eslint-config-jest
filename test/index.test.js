/* --------------------
 * `@overlookmotel/eslint-config-jest` module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfigJest = require('@overlookmotel/eslint-config-jest');

// Tests

it('Exports an object', () => { // eslint-disable-line jest/prefer-lowercase-title
	expect(eslintConfigJest).toBeObject();
});
