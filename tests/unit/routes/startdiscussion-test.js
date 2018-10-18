import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | startdiscussion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:startdiscussion');
    assert.ok(route);
  });
});
