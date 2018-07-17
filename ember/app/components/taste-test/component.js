import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['test-step','taste'],

  buttonStyle: Ember.computed('test.color',function(){
    return Ember.String.htmlSafe(`color:${this.get('test.color')};`)
  }),

  actions:{
    enter(key){
      if(key.keyCode === 13){
        this.get('choose')();
      }
    }
  }

});
