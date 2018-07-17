import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('index',{path:'/'});
  this.route('sample',{path:'/'});
  this.route('signup');
  this.route('signup-screensaver');
});

export default Router;
