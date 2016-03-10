import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({

  tagName: 'span',
  classNames: ['result-value'],

  current: 0,

  didReceiveAttrs(){
    this.trigger('update');
    console.log('updated!')
  },

  animate: task(function * (){
    let current = this.get('current');
    let update = this.get('sample');

    let delta = Math.abs(current - update);
    let direction = current<update? 1 : -1;

    while(delta){
      this.set('current', this.get('current') + direction);
      delta--;
      yield timeout(100);
    }

  }).on('update').restartable(),

});
