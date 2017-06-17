import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  showForm: true,
  showFlavors: false,

  _toggleElements(){
    this.toggleProperty('showForm');
    this.toggleProperty('showFlavors');
  },

  _closeModal(){
    this.set('submitModalOpen',false);
    Ember.$(document).trigger('activity.idle');
  },

  _focusScanInput(){
    Ember.$('.badge-scan-input').focus();
    Ember.$('.badge-scan-input').select();
  },

  _fillInModel(LeadInfo){
    let model = this.get('model');
    model.setProperties({
      name: `${LeadInfo.FirstName} ${LeadInfo.LastName}`,
      title: LeadInfo.Title,
      email: LeadInfo.Email,
      phone: `${LeadInfo.Phone} ${LeadInfo.PhoneExtension}`,
      company: LeadInfo.Company,
      address: `${LeadInfo.Address} ${LeadInfo.Address2} ${LeadInfo.Address3}`,
      city: LeadInfo.City,
      zip: LeadInfo.ZipCode,
      state: LeadInfo.StateCode,
      country: LeadInfo.CountryCode,
    });
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
        this.set('submitMessage',"Thank you, Please check out our presentation times.");
        this.set('submitModalOpen',true);
      })
      .catch(()=>{
        this.set('submitMessage',"Sorry, somethign went wrong.  Check with an associate to complete your request, also please check out our presentation times.");
        this.set('submitModalOpen',true);
      })
      .finally(()=>{
        Ember.run.later(this, this._closeModal,7000);
      });
    },

    openScanModal(){
      this.set('scanModalOpen',true);
      this.set('scanValue','');
      this.set('scanError',undefined);
      Ember.run.later(this,this._focusScanInput,500);
    },

    closeScanModal(){
      this.set('scanModalOpen',false);
    },

    submitScan(value){
      this.set('scanValue','');
      this.set('scanError',undefined);
      this.set('scanError', 'Badge scanned please wait...');
      this.get('ajax').request('/api/badgescan',{
        method: 'POST',
        data: {barcode:value},
      }).then((response)=>{
        if(response.Success){
          this._fillInModel(response.LeadInfo);
        }
        else{
          throw new Error(response.Messages[0].Message);
        }
        this.set('scanModalOpen',false);
      }).catch((reason)=>{
        this.set('scanError', reason);
      });

    }
  }
});
