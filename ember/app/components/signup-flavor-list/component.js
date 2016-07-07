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
    return Flavors.findBy('Featured');
  }),

  cheeseNormal: Ember.computed(function(){
    return Flavors.filterBy('Category','Normal');
  }),

  cheeseTriple: Ember.computed(function(){
    return Flavors.filterBy('Category','Triple');
  }),

  cheeseWhite: Ember.computed(function(){
    return Flavors.filterBy('Category','White');
  }),

  cheeseVarietal: Ember.computed(function(){
    return Flavors.filterBy('Category','Varietal');
  }),

  seasoningDistinctive: Ember.computed(function(){
    return Flavors.filterBy('Category','Distinctive');
  }),

  seasoningNacho: Ember.computed(function(){
    return Flavors.filterBy('Category','Nacho');
  }),

  seasoningSourCream: Ember.computed(function(){
    return Flavors.filterBy('Category','Sour Cream');
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
