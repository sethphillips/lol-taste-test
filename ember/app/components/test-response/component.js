import Ember from 'ember';
import TextImage from 'lol-taste-test/mixins/text-image';


export default Ember.Component.extend(TextImage,{
  i18n: Ember.inject.service(),
  classNames: ['test-step','response'],

  image: Ember.computed('sample.{colorA,colorB}','thanks',function(){
    if(this.get('thanks')){
      return 'thanks';
    }
    if(this.get('sample.colorA')){
      return 'wrong';
    }
    return 'right';
  }),

  init(){
    this._super(...arguments);
    Ember.run.later(this, this.attrs.reset,5000);
  },

});
