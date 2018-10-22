import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create-team/team-name', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-team/team-name');
    assert.ok(route);
  });
});
