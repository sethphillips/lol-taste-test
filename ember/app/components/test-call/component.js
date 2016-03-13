import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){
    this._super(...arguments);
    Ember.run.later(this, this._transition, 7000);
  },

  _transition(){
    console.log('transition from call')
    if(this.get('next') === 'a'){
      this.attrs.showA();
    }
    if(this.get('next') === 'b'){
      this.attrs.showB();
    }
  },
});
