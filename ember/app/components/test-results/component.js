import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results'],

  buttonStyle: Ember.computed('screen.color',function(){
    return Ember.String.htmlSafe(`color:${this.get('screen.color')};`)
  }),

});
