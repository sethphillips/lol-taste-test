import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results','taste-results'],

  showSampleA: Ember.computed.equal('sample','a'),
  showSampleB: Ember.computed.equal('sample','b'),

  sampleA: Ember.computed('results.@each.tasteA',function(){
    let choice = this.get('results').filterBy('tasteA').get('length');
    let total = this.get('results.length');
    return Math.floor(choice / total * 100)
  }),
  sampleB: Ember.computed('results.@each.tasteB',function(){
    let choice = this.get('results').filterBy('tasteB').get('length');
    let total = this.get('results.length');
    return Math.floor(choice / total * 100)
  }),
});
