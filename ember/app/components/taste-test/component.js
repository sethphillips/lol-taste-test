import Ember from 'ember';
// import TextImage from 'lol-taste-test/mixins/text-image';


export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  classNames: ['test-step','taste'],

  buttonStyle: Ember.computed('test.color',function(){
    return Ember.String.htmlSafe(`color:${this.get('test.color')};`)
  })
});
