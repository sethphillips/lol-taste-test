import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('signup');
  },

  activate(){
    Ember.$(document).on('activity.idle', ()=>{
      this.transitionTo('signup-screensaver');
    });
  },

  deactivate(){
    Ember.$(document).off('activity.idle');
  },

  setupController(controller){
    this._super(...arguments);

    controller.set('scanModalOpen',false);
    controller.set('submitModalOpen',false);
    controller.set('showForm',true);
    controller.set('showFlavors',false);

    Ember.$(document).activity({
      delay: 45000,
    });
  },

  actions:{
    refreshRoute(){
      this.store.unloadAll();
      this.refresh();
    }
  }
});
