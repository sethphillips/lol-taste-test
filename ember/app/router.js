import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('sample');
  this.route('signup');
});

export default Router;
