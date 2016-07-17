import Ember from 'ember';

export default Ember.Mixin.create({
  imagePath: Ember.computed('image','i18n.locale',function(){
    let image = this.get('image');
    let locale = this.get('i18n.locale');
    let imagePath = `assets/images/${locale}/${image}.png`;

    return this.assets.resolve(imagePath);
  }),
});
