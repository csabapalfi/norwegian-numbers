const assert = require('assert');

const number = 1234.123;

assert.equal(
    number.toLocaleString('no'), 
    number.toLocaleString('nb'),
    'no should be aliased to nb'
);