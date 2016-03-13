import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  sub: DS.attr(),
  number: DS.attr(),
  size: DS.attr(),
});
