import Controller from 'data-fetcher/lib/controllers/base-resource';
import { alias } from '@ember/object/computed';
import { get } from '@ember/object';

export default Controller.extend({
  physicals: alias('model'),

  selectedUser: null,

  staticIp: null,

  selectedDevice: alias('selectedUser.device'),

  selectedIps: alias('selectedUser.ips'),

  isUserLoading: false,

  i18nNamespace: 'physicals',

  _getProperties() {
    return [
      'login',
      'name',
      'address',
      'phone',
      'email',
      'account'
    ];
  },

  actions: {
    selectUser(e) {
      const user = get(e, 'selectedItems.firstObject');
      this.set('selectedUser', user);
      if (user) {
        this.send('loadUserIps', user);
      }
    },

    filter(filterObject, pagination) {
      this.set('staticIp', null);
      this.send('filterModel', filterObject, pagination);
    }
  }
});
