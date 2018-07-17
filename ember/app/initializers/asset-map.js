import ENV from 'lol-taste-test/config/environment';

export function initialize( application ) {
  application.deferReadiness();

  var AssetMap = Ember.Object.extend();

  var promise = new Ember.RSVP.Promise(function(resolve, reject) {
    if(ENV.environment === 'development'){
      resolve();
      return;
    }
    Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
  });

  promise.then(function(assetMap) {
      AssetMap.reopen({
          assetMap: assetMap,
          resolve: function(name) {
              return assetMap.assets[name];
          }
      });
  }, function() {
      AssetMap.reopen({
          resolve: function(name) {
              return name;
          }
      });
  }).then(function() {
      application.register('assetMap:main', AssetMap, {singleton: true});
      application.inject('component', 'assets', 'assetMap:main');
      application.advanceReadiness();
  });
}

export default {
  name: 'asset-map',
  initialize
};
