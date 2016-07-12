import Ember from 'ember';

export default Ember.Controller.extend({

  screen: 'test-results',
  sample: 'a',
  closure: Ember.computed(function(){
    return this.actions.showFact;
  }),


  actions:{
    showFact(){
      let sample = this.get('sample');
      this.set('screen','test-fact');
      if(sample === 'a'){
        this.set('closure',this.actions.showB);
      }
      else if(sample === 'b'){
        this.set('closure',this.actions.showCall);
      }
      else{
        this.set('closure',this.actions.showA);
      }
    },
    showA(){
      this.set('screen','test-results');
      this.set('sample','a');
      this.set('closure',this.actions.showFact);
    },
    showB(){
      this.set('screen','test-results');
      this.set('sample','b');
      this.set('closure',this.actions.showFact);
    },
    showCall(){
      this.set('screen','test-call');
      this.set('sample',null);
      this.set('closure',this.actions.showFact);
    },
  }
});
