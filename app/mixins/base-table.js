import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import Bs4Theme from 'ember-models-table/themes/bootstrap4';

export default Mixin.create({
  i18n: service(),

  init() {
    const i18n = this.get('i18n');
    const theme = Bs4Theme.create({
      table: 'base-table',
      messages: {
        'columns-title': i18n.t('components.table.columns'),
        'columns-showAll': i18n.t('components.table.showAll'),
        'columns-hideAll': i18n.t('components.table.hideAll'),
        'columns-restoreDefaults': i18n.t('components.table.restoreDefaults'),
        'noDataToShow': i18n.t('components.table.noData'),
      }
    });
    this.set('themeInstance', theme);

    this._super(...arguments);
  }
});
