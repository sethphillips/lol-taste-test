import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['taste-test-image'],
  attributeBindings: ['style'],
  style: Ember.computed('image',function(){
    return Ember.String.htmlSafe(`background-image:url(${this.get('image')});`)
  })
});
