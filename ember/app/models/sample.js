import DS from 'ember-data';

export default DS.Model.extend({
  tasteA: DS.attr('boolean'),
  tasteB: DS.attr('boolean'),
  colorA: DS.attr('boolean'),
  colorB: DS.attr('boolean'),
});
