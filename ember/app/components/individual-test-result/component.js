import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['individual-test-result'],

  totalOfChoice: Ember.computed('choice','allResults.[]',function(){
    return this.get('allResults')
      .getEach(this.get('choice.value'))
      .filter((boolean)=>boolean)
      .get('length');
  }),

  percentageOfChoice: Ember.computed('totalOfChoice', 'allResults.[]',function(){
    let all  = this.get('allResults.length') || 1;
    let choice = this.get('totalOfChoice');
    return Math.floor(choice / all * 100);
  })
});
