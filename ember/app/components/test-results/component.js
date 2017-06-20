import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results'],

  buttonStyle: Ember.computed('screen.color',function(){
    return Ember.String.htmlSafe(`color:${this.get('screen.color')};`)
  }),

  facts: [
    'assets/images/facts/fact_01.jpg',
    'assets/images/facts/fact_02.jpg',
    'assets/images/facts/fact_03.jpg',
    'assets/images/facts/fact_04.jpg',
  ],

  image: Ember.computed('screen.image',function(){
    if(this.get('screen.image')){
      return this.get('screen.image');
    }
    let facts = this.get('facts');
    let random = Math.floor(Math.random() * facts.length);
    return facts[random];
  }),
});
