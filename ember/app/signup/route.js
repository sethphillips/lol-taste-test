import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('signup',{country: 'US'});
  },

  activate(){
    Ember.$(document).on('activity.idle', ()=>{
      this.transitionTo('signup-screensaver');
    });
  },

  deactivate(){
    Ember.$(document).off('activity.idle');
  },

  setupController(){
    this._super(...arguments);
    Ember.$(document).activity({
      delay: 30000,
    });
  },

  actions:{
    refreshRoute(){
      this.store.unloadAll();
      this.refresh();
    }
  }
});
