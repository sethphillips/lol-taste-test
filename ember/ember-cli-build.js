/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
    },
  });

  app.import('bower_components/gsap/src/uncompressed/TweenMax.js');
  app.import('bower_components/gsap/src/uncompressed/utils/Draggable.js');
  app.import('vendor/GreenSock-ShockinglyGreen-js/src/uncompressed/plugins/ThrowPropsPlugin.js');

  return app.toTree();
};
