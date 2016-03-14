import Ember from 'ember';
import {countries} from 'ember-countries';
import provinces from 'lol-taste-test/utils/provinces';


export default Ember.Component.extend({


  countryList: countries,
  stateList: Ember.computed('selectedCountry',function(){
    return provinces.filterBy('country',this.get('selectedCountry.iso'));
  }),

  selectedCountry: Ember.computed(function(){
    return countries.findBy('iso','US');
  }),

  selectedState: Ember.computed('selectedCountry',{
    get(key){
      let state = this.get('signup.state');
      return this.get('stateList').findBy('name',state);
    },
    set(key, value){
      this.set('signup.state',value.name);
      return value;
    }
  }),

  stateMatcher(state, word) {
    let name = state.name.toLowerCase();
    let re = new RegExp(`^${word.toLowerCase()}`);

    if(name.match(re)){
      return 1;
    }
    return -1;
  },

  countryMatcher(country, word) {
    let name = country.country.toLowerCase();
    let re = new RegExp(`^${word.toLowerCase()}`);

    if(name.match(re)){
      return 1;
    }
    return -1;
  },


  didInsertElement(){
    let keyboard = Ember.$('.input').keyboard({

      acceptValid:true,

      initialFocus:false,

      alwaysOpen:false,

      enterNavigation:true,

      autoAccept:true,

      tabNavigation:true,

      usePreview:false,

      // layout:'custom',


      customLayout:{
        'default':
        [
          '1 2 3 4 5 6 7 8 9 0 - = {bksp}',
          'q w e r t y u i o p',
          "a s d f g h j k l ;",
          'z x c v b n m . @',
          '.com .net .edu .gov',
          '{space} {accept}',
        ]

      },

      willDestroyElement(){
        this.get('keyboard').destroy();
      }

      // accepted: (event, keyboard, el) => {
        // let email = Ember.$(el).val()
        // if(email){
        //   let pdfs = this.get('pdfs').filterBy('send').mapBy('pdf');
        //   this.attrs.email(email,pdfs);
        //   keyboard.enabled = false;
        //   keyboard.toggle();
        // }
      // },

      // validate: function(e, key, el) {
          // Accept only numeric
          // var test = /.+@.+\..+/i.test(key);

          // return test;
      // },

      // appendTo: '.keyboard-container',

      // position:{
      //   of: '.keyboard-container',
      //   my:'center center',
      //   at: 'center center',
      // },

    });

    this.set('keyboard', keyboard );
  },

  actions:{
    updateCountry(country){
      this.set('selectedCountry',country);
      this.set('signup.country',country.iso);
    },
    updateState(state){
      this.set('selectedState',state);
      this.set('signup.state',value.name);
    },
    validate(signup){
      signup.validate().then(()=>{
          this.attrs.next(signup);
      },()=>{
        this.set('validated',true);

      })
    }
  }
});
