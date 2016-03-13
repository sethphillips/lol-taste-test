import Ember from 'ember';

export default Ember.Controller.extend({
  showForm: true,
  showFlavors: false,

  _toggleElements(){
    this.toggleProperty('showForm');
    this.toggleProperty('showFlavors');
  },

  _closeModal(){
    this.set('submitModalOpen',false);
  },

  actions:{
    switchToFlavors(){
      this._toggleElements();
    },

    switchToForm(){
      this._toggleElements();
    },

    addFlavor(flavor){
      this.get('model.flavors').addObject(flavor);
    },

    removeFlavor(flavor){
      this.get('model.flavors').removeObject(flavor);
    },

    save(signup){
      signup.save().then(()=>{
        this._toggleElements();
        this.store.unloadAll();
        this.send('refreshRoute');
        this.set('submitMessage',"Thank you, Please stick around for one of our presentations.")
        this.set('submitModalOpen',true);
      })
      .catch(()=>{
        this.set('submitMessage',"Sorry, somethign went wrong.  Check with an associate to complete your request, also please stick around for one of our presentations.")
        this.set('submitModalOpen',true);
      })
      .finally(()=>{
        Ember.run.later(this, this._closeModal,7000)
      });
    }
  }
});
