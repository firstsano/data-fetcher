import { test } from 'qunit';
import moduleForAcceptance from 'data-fetcher/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | routing');

let definedRoutes = [
  'login',
  'juridicals',
  'physicals',
  'static-physicals',
];

test('visiting defined routes', function(assert) {
  for (let route of definedRoutes) {
    visit(`/${route}`);

    andThen(function() {
      assert.equal(currentURL(), `/${route}`);
    });
  }
});
