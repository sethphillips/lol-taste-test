/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
    },
  });

  app.import('bower_components/jquery-ui/jquery-ui.js');
  app.import('bower_components/gsap/src/uncompressed/TweenMax.js');
  app.import('bower_components/gsap/src/uncompressed/utils/Draggable.js');
  app.import('vendor/GreenSock-ShockinglyGreen-js/src/uncompressed/plugins/ThrowPropsPlugin.js');
  app.import('bower_components/keyboard/dist/js/jquery.keyboard.js');
  app.import('bower_components/keyboard/dist/css/keyboard-dark.min.css');
  app.import('bower_components/jquery-activity-timer/dist/jquery.activity-timer.js');
  return app.toTree();
};
