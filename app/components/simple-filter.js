import Component from '@ember/component';

export default Component.extend({
  filter: null,

  init() {
    this.set('filter', {});
    this._super(...arguments);
  },

  _filter() {
    const filter = this.get('filter'),
      additionalParams = this.get('onFilterParams')
    ;
    this.get('onFilter')(filter, additionalParams);
  },

  actions: {
    filter() {
      this._filter();
    },

    reset() {
      this.set('filter', {});
      this._filter();
    }
  }
});
