import DS from 'ember-data';
import attr from 'ember-data/attr';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  name: attr(),
  role: attr(),
  dmac: attr(),
  dip: attr(),
  mac: alias('dmac'),
  ip: alias('dip')
});
