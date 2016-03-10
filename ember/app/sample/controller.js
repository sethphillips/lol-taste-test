import Ember from 'ember';

export default Ember.Controller.extend({

  i18n: Ember.inject.service(),

  tasteAnswered: Ember.computed.or('model.tasteA','model.tasteB'),
  colorAnswered: Ember.computed.or('model.colorA','model.colorB'),

  showLanguage: Ember.computed('tasteAnswered','colorAnswered','model.language',function(){
    return !!(!this.get('tasteAnswered') && !this.get('colorAnswered') && !this.get('model.language'));
  }),

  showTaste: Ember.computed('showLanguage','tasteAnswered',function(){
    return !!(!this.get('showLanguage') && !this.get('tasteAnswered'));
  }),

  showColor: Ember.computed('showLanguage','showResults','tasteAnswered',function(){
    return !!(!this.get('showLanguage') && !this.get('showResults') && this.get('tasteAnswered'));
  }),
  showResults: Ember.computed('tasteAnswered','colorAnswered',function(){
    return !!(this.get('tasteAnswered') && this.get('colorAnswered'));
  }),

  actions:{
    chooseLanguage(language){
      this.set('model.language',language);
      this.set('i18n.locale', language);
    },
    chooseTaste(sample,choice){
      sample.set(`taste${choice}`,true);
    },

    chooseColor(sample,choice){
      sample.set(`color${choice}`,true);
      sample.save()
        .then(()=>{
          Ember.Logger.info('Successfully Submitted');
        })
    },

  }
});
