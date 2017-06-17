import DS from 'ember-data';

export default DS.Model.extend({
  boldA: DS.attr('boolean'),
  boldB: DS.attr('boolean'),
  boldC: DS.attr('boolean'),
  cheddarA: DS.attr('boolean'),
  cheddarB: DS.attr('boolean'),
  cheddarC: DS.attr('boolean'),
  mouthfeelA: DS.attr('boolean'),
  mouthfeelB: DS.attr('boolean'),
  mouthfeelC: DS.attr('boolean'),

});
