import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){
    this._super(...arguments);
    Ember.run.later(this, this._transition, 12000);
  },

  _transition(){
    this.attrs.transition();
  },
});
