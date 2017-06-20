import Ember from 'ember';
import Flavors from 'lol-taste-test/fixtures/flavors';

export default Ember.Component.extend({

  didInsertElement(){
    window.Draggable.create(".draggable", {type:"scrollTop", edgeResistance:0.7, throwProps:true});
  },

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

  featured: Ember.computed(function(){
    let flavors = Flavors.filterBy('Featured');
    let random = Math.floor(Math.random() * flavors.length);
    return flavors[random];
  }),

  categories: Ember.computed(function(){
    return Flavors.getEach('Category').uniq().sort().map((name)=>{
      let flavors = Flavors.filterBy('Category',name);
      return {name,flavors}
    });
  }),

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
