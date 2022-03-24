/* --------------------
 * `@overlookmotel/eslint-config-jest` module
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
		'jest/no-alias-methods': ['error'],
		'jest/no-disabled-tests': ['error'],
		'jest/no-test-return-statement': ['error'],
		'jest/prefer-lowercase-title': ['error', {ignoreTopLevelDescribe: true}],
		'jest/prefer-to-be': ['error'],
		'jest/prefer-to-contain': ['error'],
		'jest/prefer-to-have-length': ['error'],
		'jest/require-to-throw-message': ['error']
	}
};
