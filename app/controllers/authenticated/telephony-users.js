import Controller from 'data-fetcher/lib/controllers/base-resource';
import { alias } from '@ember/object/computed';
import { get, observer } from '@ember/object';

export default Controller.extend({
  modelChanged: observer('model', function() {
    this.set('filteredModel', this.get('model'));
  }),

  filteredModel: null,

  telephonyUsers: alias('filteredModel'),

  selectedUser: null,

  i18nNamespace: 'telephony',

  _getProperties() {
    return [
      'number',
      'client',
      'hookupAddress',
      'orgAddress',
      'phones',
      'inn'
    ];
  },

  actions: {
    selectUser(e) {
      const user = get(e, 'selectedItems.firstObject');
      this.set('selectedUser', user);
    },

    filter(filterObject) {
      const filters = Object.keys(filterObject);
      let filteredModel = this.get('model');
      for(let filter of filters) {
        const value = filterObject[filter];
        if (!value) {
          continue;
        }
        filteredModel = filteredModel.filter(function(item) {
          const val = item.get(filter);
          if (!val) {
            return false;
          }
          return val.toString().includes(value);
        });
      }
      this.set('filteredModel', filteredModel);
    }
  }
});
