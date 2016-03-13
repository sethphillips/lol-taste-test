import Ember from 'ember';

export default Ember.Controller.extend({

  showSampleA: true,
  showSampleB: false,
  showCall:false,


  actions:{
    showA(){
      this.set('showCall',false);
      this.set('showSampleA',true);
      this.set('showSampleB',false);
    },
    showB(){
      this.set('showCall',false);
      this.set('showSampleA',false);
      this.set('showSampleB',true);
    },
    showCall(next){
      this.set('next',next);
      this.set('showCall',true);
      this.set('showSampleA',false);
      this.set('showSampleB',false);
      this.send('refresh');
    },
  }
});
