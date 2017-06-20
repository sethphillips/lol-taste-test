import Ember from 'ember';
import {task, timeout} from 'ember-concurrency';

export default Ember.Controller.extend({



  animateScreens: task(function*(){

    let screen = this.get('screen');
    this.set('activeScreen', this.get('screens').objectAt(screen));

    yield timeout(8000);

    this.set('screen',screen+1)

    if(screen >= this.get('screens.length') - 1){
      this.set('screen',0)
    }

    this.get('animateScreens').perform();
  }),


  screens:[
    {
      image:'/assets/images/results/result_bold.jpg',
      color:'#EC1F2F',
      choices:[
        {label:'A',value:'boldA'},
        {label:'B',value:'boldB'},
        {label:'C',value:'boldC'},
      ]
    },
    {}, // i am a fact slide
    {
      image:'/assets/images/results/result_mouthfeel.jpg',
      color:'#0EBFD7',
      choices:[
        {label:'A',value:'mouthfeelA'},
        {label:'B',value:'mouthfeelB'},
        {label:'C',value:'mouthfeelC'},
      ]
    },
    {}, // i am a fact slide
    {
      image:'/assets/images/results/result_cheddar.jpg',
      color:'#FDD800',
      choices:[
        {label:'A',value:'cheddarA'},
        {label:'B',value:'cheddarB'},
        {label:'C',value:'cheddarC'},
      ]
    },
    {}, // i am a fact slide
  ],

});
