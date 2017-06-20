import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['information-cutsheet'],

  offsetY: 0,

  src: Ember.computed('cutsheet',function(){
    return Ember.String.htmlSafe(this.get('cutsheet'));
  }),

  actions:{
    openModal(){
      this.set('modalOpen',true);
      window.Draggable.create(".specifications-modal", {type:"scrollTop", edgeResistance:0.7, throwProps:true});
    },
    closeModal(){
      this.set('modalOpen',false);
    },
  }
});
