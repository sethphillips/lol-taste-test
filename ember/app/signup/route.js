import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('signup',{country: 'US'});
  },

  actions:{
    refreshRoute(){
      this.store.unloadAll();
      this.refresh();
    }
  }
});
