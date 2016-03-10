import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('sample')
      .finally(()=>{
        Ember.run.later(this,this.refresh,5000);
      })
  }
});
