import Ember from 'ember';

export default Ember.Route.extend({

  i18n: Ember.inject.service(),

  model(){
    return this.store.createRecord('sample');
  },

  actions:{
    resetTest(){
      this.set('i18n.locale','en');
      this.store.unloadAll('sample');
      this.refresh()
    },
  }
});
