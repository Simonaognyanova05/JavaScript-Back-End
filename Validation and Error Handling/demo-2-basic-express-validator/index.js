const { body, validationResult } = require('express-validator');

const username = '';

console.log((validationResult(body(username, 'Username is empty').notEmpty())).errors);
