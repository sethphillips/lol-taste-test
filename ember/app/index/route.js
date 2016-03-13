import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('sample')
  },

  actions:{
    refresh(){
      this.refresh();
    }
  }
});
