import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results','color-results'],

  sampleA: Ember.computed('results.@each.colorA',function(){
    let choice = this.get('results').filterBy('colorA').get('length');
    let total = this.get('results.length');
    return Math.floor(choice / total * 100)
  }),

  sampleB: Ember.computed('results.@each.colorB',function(){
    let choice = this.get('results').filterBy('colorB').get('length');
    let total = this.get('results.length');
    return Math.floor(choice / total * 100)
  }),

});
