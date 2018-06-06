import moment from 'moment';
import DS from 'ember-data';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  inetAddr: attr(),
  unitName: attr(),
  timeStart: attr('number'),
  timeEnd: attr('number'),
  clientName: attr(),
  hookupAddress: attr(),
  orgAddress: attr(),
  phones: attr(),
  inn: attr(),
  ip: alias('inetAddr'),
  name: alias('unitName'),
  client: alias('clientName'),
  from: computed('timeStart', function() {
    return this._formatDate(this.get('timeStart'));
  }),
  to: computed('timeEnd', function() {
    return this._formatDate(this.get('timeEnd'));
  }),

  _formatDate(date) {
    if (!date) {
      return "-";
    }
    return moment.unix(date).format();
  }
});
