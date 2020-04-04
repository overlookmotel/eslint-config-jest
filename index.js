/* --------------------
 * @overlookmotel/eslint-config-jest module
 * ------------------*/

'use strict';

// Exports

module.exports = {
	plugins: [
		'jest'
	],
	env: {
		'jest/globals': true
	},
	extends: [
		'plugin:jest/recommended'
	],
	rules: {
		'jest/consistent-test-it': ['error', {fn: 'it', withinDescribe: 'it'}],
		'jest/expect-expect': ['error'],
		'jest/lowercase-name': ['error'],
		'jest/no-test-callback': ['error'],
		'jest/no-test-return-statement': ['error'],
		'jest/prefer-to-be-null': ['error'],
		'jest/prefer-to-be-undefined': ['error'],
		'jest/prefer-to-contain': ['error'],
		'jest/prefer-to-have-length': ['error'],
		'jest/require-to-throw-message': ['error'],
		'jest/no-disabled-tests': ['error']
	}
};
