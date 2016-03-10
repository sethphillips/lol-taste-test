import Ember from 'ember';
import TextImage from 'lol-taste-test/mixins/text-image';

export default Ember.Component.extend(TextImage,{
  i18n: Ember.inject.service(),

  classNames: ['test-step','language'],
  image: 'language',
});
