import Ember from 'ember';

export default Ember.Route.extend({

  // i18n: Ember.inject.service(),

  model(){
    return this.store.createRecord('sample',{language:'en'});
  },

  setupController(controller){
    this._super(...arguments);
    controller.set('start',false);
  },

  actions:{
    resetTest(){
      // this.set('i18n.locale','en');
      // this.store.unloadAll('sample');
      this.refresh()
    },
  }
});
