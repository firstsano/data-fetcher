import { moduleFor, test } from 'ember-qunit';
import localeConfig from 'ember-i18n/config/ru';

/**
 * Awful list of dependencies and registrations comes from
 * ember-i18n library. Sources:
 *  - https://github.com/jamesarosen/ember-i18n/issues/368
 *  - https://github.com/jamesarosen/ember-i18n/issues/440
 */
moduleFor('controller:application', 'Unit | Controller | application', {
  unit: true,
  needs: [
    'service:i18n',
    'locale:ru/translations',
    'util:i18n/missing-message',
    'util:i18n/compile-template',
    'config:environment'
  ],
  beforeEach: function () {
    this.register('locale:ru/config', localeConfig);
  }
});

test('it exists', function(assert) {
  const controller = this.subject();
  assert.ok(controller);
});

test('it should have mainMenuItems property', function(assert) {
  const controller = this.subject(),
        menuItems = controller.get('mainMenuItems')
  ;
  assert.ok(menuItems);
  assert.notEqual(menuItems, []);
  for (let item of menuItems) {
    assert.ok(item.url);
    assert.ok(item.label);
  }
});
