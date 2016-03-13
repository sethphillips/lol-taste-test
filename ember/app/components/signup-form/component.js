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
