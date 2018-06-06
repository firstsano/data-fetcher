import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'data-fetcher/config/environment';

export default Controller.extend({
  i18n: service(),

  page: ENV.pagination.defaultPage,

  perPage: ENV.pagination.defaultPerPage,

  columns: null,

  i18nNamespace: 'app',

  init() {
    const properties = this._getProperties();
    let columns = [];
    for(let property of properties) {
      columns.push({
        title: this._t(property),
        propertyName: property,
        disableSorting: true,
      });
    }
    this.set('columns', columns);

    this._super(...arguments);
  },

  _getProperties() {
    return [];
  },

  _t(string) {
    const i18n = this.get('i18n'),
          namespace = this.get('i18nNamespace');
    return i18n.t(`${namespace}.${string}`);
  }
});
