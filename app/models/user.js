import DS from 'ember-data';
import attr from 'ember-data/attr';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  login: attr(),
  fullName: attr(),
  actualAddress: attr(),
  mobilePhone: attr(),
  email: attr(),
  accountId: attr('number'),
  name: alias('fullName'),
  address: alias('actualAddress'),
  phone: alias('mobilePhone'),
  account: alias('accountId'),

  // Relations
  device: DS.belongsTo('device')
});
