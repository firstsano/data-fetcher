import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  navItems: null,
  i18n: service(),

  init() {
    this._super(...arguments);
    const i18n = this.get('i18n');
    const navigationItems = [
      { label: i18n.t('app.physicals'), url: 'authenticated.physicals' },
      { label: i18n.t('app.juridicals'), url: 'authenticated.juridicals' },
      { label: i18n.t('app.telephonyUsers'), url: 'authenticated.telephony-users' },
    ];
    this.set('navItems', navigationItems);
  }
});
