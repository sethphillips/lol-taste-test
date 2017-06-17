import Ember from 'ember';

export default Ember.Controller.extend({

  boldTestTaken: Ember.computed.or('model.boldA','model.boldB','model.boldC'),
  cheddarTestTaken: Ember.computed.or('model.cheddarA','model.cheddarB','model.cheddarC'),
  mouthfeelTestTaken: Ember.computed.or('model.mouthfeelA','model.mouthfeelB','model.mouthfeelC'),

  currentTest: Ember.computed('start','boldTestTaken','mouthfeelTestTaken',function(){
    if(this.get('start') === false){
      return {image:'/assets/images/samples/sample_start.jpg'};
    }

    if(this.get('mouthfeelTestTaken')){
      return {
        image:'/assets/images/samples/sample_cheddar.jpg',
        color:'#FDD800',
        choices:[
          {label:'A',value:'cheddarA'},
          {label:'B',value:'cheddarB'},
          {label:'C',value:'cheddarC'},
        ]
      }
    }
    if(this.get('boldTestTaken')){
      return {
        image:'/assets/images/samples/sample_mouthfeel.jpg',
        color:'#0EBFD7',
        choices:[
          {label:'A',value:'mouthfeelA'},
          {label:'B',value:'mouthfeelB'},
          {label:'C',value:'mouthfeelC'},
        ]
      }
    }
    return {
      image:'/assets/images/samples/sample_bold.jpg',
      color:'#EC1F2F',
      choices:[
        {label:'A',value:'boldA'},
        {label:'B',value:'boldB'},
        {label:'C',value:'boldC'},
      ]
    }
  }),

  actions:{
    start(boolean){
      this.set('start',true);
    },
    choose(value){
      let model = this.get('model');
      model.set(value,true);
      if(this.get('cheddarTestTaken')){
        model.save()
          .then(()=>{
            this.set('start',false);
            this.send('resetTest');
          })
          .catch(()=>{
            window.alert('sorry somethign went wrong, please see a representative in the booth');
          });
      }
    },
  }
});
