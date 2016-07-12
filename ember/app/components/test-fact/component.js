import Ember from 'ember';

export default Ember.Component.extend({

  facts: [
    'assets/images/fact_01.png',
    'assets/images/fact_02.png',
    'assets/images/fact_03.png',
    'assets/images/fact_04.png',
    'assets/images/fact_05.png',
    'assets/images/fact_06.png',
  ],

  fact: Ember.computed(function(){
    let facts = this.get('facts');
    let random = Math.floor(Math.random() * facts.length);
    console.info(random);
    return facts[random];
  }),

  didInsertElement(){
    this._super(...arguments);
    Ember.run.later(this, this._transition, 12000);
  },

  _transition(){
    this.attrs.transition();
  },
});
