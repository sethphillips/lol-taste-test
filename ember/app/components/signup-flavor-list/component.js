import Ember from 'ember';

export default Ember.Component.extend({

  rotateOne: Ember.computed('listOneOpen',function(){
    if(this.get('listOneOpen')){
      return 180;
    }
    return 0;
  }),

  rotateTwo: Ember.computed('listTwoOpen',function(){
    if(this.get('listTwoOpen')){
      return 180;
    }
    return 0;
  }),

  didInsertElement(){
    window.Draggable.create(".draggable", {type:"scrollTop", edgeResistance:0.7, throwProps:true});
  },

  actions:{
    openListOne(){
      this.toggleProperty('listOneOpen');
      if(this.get('listTwoOpen')){
        this.set('listTwoOpen',false)
      }
    },
    openListTwo(){
      this.toggleProperty('listTwoOpen');
      if(this.get('listOneOpen')){
        this.set('listOneOpen',false)
      }
    }
  }
});
