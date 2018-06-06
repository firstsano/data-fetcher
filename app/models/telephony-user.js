import DS from 'ember-data';
import attr from 'ember-data/attr';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  number: attr('number'),
  clientName: attr(),
  hookupAddress: attr(),
  orgAddress: attr(),
  phones: attr(),
  inn: attr(),
  client: alias('clientName'),
});
