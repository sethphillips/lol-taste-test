import Ember from 'ember';

export default Ember.Component.extend({

  facts: [
    'assets/images/facts/fact_01.jpg',
    'assets/images/facts/fact_02.jpg',
    'assets/images/facts/fact_03.jpg',
    'assets/images/facts/fact_04.jpg',
  ],

  fact: Ember.computed(function(){
    let facts = this.get('facts');
    let random = Math.floor(Math.random() * facts.length);
    return facts[random];
  }),

});
