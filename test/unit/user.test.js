const assert = require('assert');

it('user service is an object', (done) => {
  assert.equal(typeof UsersService, 'object');
  done();
});
