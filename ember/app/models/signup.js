import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations,{
  validations:{
    name:{
      presence:true,

    },
    company:{
      presence:true,

    },

    email:{
      presence:true,

    },
    phone:{
      presence:true,

    },
    address:{
      presence:true,

    },
    city:{
      presence:true,

    },
    zip:{
      presence:true,

    },
    state:{
      presence:{
        'if':function(object, validator){
          let country = object.get('country');
          return country === 'US' || country === 'CA';
        }
      }
    }
  },

  name: DS.attr(),
  title: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  company: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  zip: DS.attr(),
  country: DS.attr(),
  state: DS.attr(),
  flavors: DS.hasMany('flavor',{async:false})
});
