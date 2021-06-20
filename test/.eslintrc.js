/* --------------------
 * `@overlookmotel/eslint-config-jest` module
 * ESLint tests config
 * ------------------*/

'use strict';

// Imports
const eslintConfigJest = require('../index.js');

// Exports

module.exports = {
	...eslintConfigJest,
	rules: {
		...eslintConfigJest.rules,
		'import/no-unresolved': ['error', {ignore: ['^@overlookmotel/eslint-config-jest$']}]
	}
};
