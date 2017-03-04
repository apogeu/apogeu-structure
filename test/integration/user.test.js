const assert = require('assert');

it('list users', (done) => {
  UsersService.list({ limit: 1 })
    .then((results) => {
      assert.equal(results.length, 1);
      done();
    });
});
