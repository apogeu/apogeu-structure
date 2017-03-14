const assert = require('assert');

it('list users', (done) => {
  UsersService.list()
    .then((results) => {
      assert.equal(Array.isArray(results), true);
      done();
    })
    .catch(done);
});
