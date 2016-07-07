import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  classNames: ['flavor'],
  classNameBindings: ['featured'],

  init(){
    this._super(...arguments);
    let flavor = this.get('signup.flavors').findBy('number',this.get('number'));
    if(flavor){
      this.set('selected',true);
    }
    else{
      flavor = this.get('store').createRecord('flavor',{
        name:this.get('item.Name'),
        number: this.get('item.SKU'),
        size:'8oz',
      });
    }
    if(this.get('featured')){
      this.attrs.add(flavor);
    }
    this.set('flavor',flavor);
  },

  actions: {
    select(selected){
      let flavor = this.get('flavor');
      if(selected){
        this.attrs.remove(flavor);
      }
      else{
        this.attrs.add(flavor);
      }
      this.toggleProperty('selected');
    },

    updateSize(size){
      this.set('flavor.size',size)
    },

    openModal(){
      this.set('detailsOpen',true);
    },

    closeModal(){
      this.set('detailsOpen',false);
    },
  }
});
