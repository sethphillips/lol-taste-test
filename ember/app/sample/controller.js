import Ember from 'ember';

export default Ember.Controller.extend({

  currentTest: Ember.computed('step',function(){
    if(this.get('step') === 'question'){
      return {image:'/assets/images/samples/question.jpg'}
    }

    if(this.get('step') === 'stats'){
      return {image:'/assets/images/samples/stats.jpg'}
    }

    if(this.get('step') === 'thank_you'){
      return {image:'/assets/images/samples/thank_you.jpg'};
    }


    return {image:'/assets/images/samples/start.jpg'};
  }),

  _stats(){
    this.set('step','stats');
    Ember.run.later(this, ()=>{
      this._thankYou();
    },5000);
  },

  _thankYou(){
    this.set('step','thank_you');
    Ember.run.later(this, ()=>{
      this.send('resetTest')
    },4000)
  },

  actions:{
    start(boolean){
      if(!this.get('step')){
        this.set('step','question');
      }
    },

    choose(){
      let model = this.get('model');
      model.save()
        .then(()=>{
          this._stats();
        })
        .catch(()=>{
          window.alert('sorry somethign went wrong, please see a representative in the booth');
        });
    },
  }
});
