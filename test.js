const assert = require('assert');

const number = 1234.123;

assert.equal(
    number.toLocaleString('nb-NO'), '1 234,123', 
    'toLocaleString(\'nb-NO\') does not format correctly'
);

assert.equal(
    number.toLocaleString('no-NO'), '1 234,123',
    'toLocaleString(\'no-NO\') does not format correctly'
);