import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('sample')
  },

  setupController(controller){
    this._super(...arguments);
    controller.set('screen',0);
    controller.get('animateScreens').perform();
  },

  actions:{
    refresh(){
      this.refresh();
    }
  }
});
