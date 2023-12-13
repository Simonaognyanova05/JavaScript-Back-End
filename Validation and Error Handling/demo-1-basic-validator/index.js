const validator = require('validator');

const data = validator.isEmail('so');
const isEmpty = validator.isEmpty('so');

console.log(data);
console.log(isEmpty);
