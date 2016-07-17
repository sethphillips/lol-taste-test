"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('lol-taste-test/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({

    namespace: 'api'

  });
});
define('lol-taste-test/app', ['exports', 'ember', 'lol-taste-test/resolver', 'ember-load-initializers', 'lol-taste-test/config/environment'], function (exports, _ember, _lolTasteTestResolver, _emberLoadInitializers, _lolTasteTestConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _lolTasteTestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lolTasteTestConfigEnvironment['default'].podModulePrefix,
    Resolver: _lolTasteTestResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _lolTasteTestConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('lol-taste-test/components/animated-counter/component', ['exports', 'ember', 'ember-concurrency'], function (exports, _ember, _emberConcurrency) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'span',
    classNames: ['result-value'],

    current: 0,

    didReceiveAttrs: function didReceiveAttrs() {
      this.trigger('update');
    },

    animate: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0() {
      var current, update, delta, direction;
      return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            current = this.get('current');
            update = this.get('sample');
            delta = Math.abs(current - update);
            direction = current < update ? 1 : -1;

          case 4:
            if (!delta) {
              context$1$0.next = 11;
              break;
            }

            this.set('current', this.get('current') + direction);
            delta--;
            context$1$0.next = 9;
            return (0, _emberConcurrency.timeout)(30);

          case 9:
            context$1$0.next = 4;
            break;

          case 11:
          case 'end':
            return context$1$0.stop();
        }
      }, callee$0$0, this);
    })).on('update').restartable()

  });
});
define("lol-taste-test/components/animated-counter/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/animated-counter/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("%\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "current", ["loc", [null, [1, 0], [1, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'lol-taste-test/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _lolTasteTestConfigEnvironment) {

  var name = _lolTasteTestConfigEnvironment['default'].APP.name;
  var version = _lolTasteTestConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('lol-taste-test/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('lol-taste-test/components/color-test/component', ['exports', 'ember', 'lol-taste-test/mixins/text-image'], function (exports, _ember, _lolTasteTestMixinsTextImage) {
  exports['default'] = _ember['default'].Component.extend(_lolTasteTestMixinsTextImage['default'], {
    i18n: _ember['default'].inject.service(),
    classNames: ['test-step', 'color'],
    image: 'color'
  });
});
define("lol-taste-test/components/color-test/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/color-test/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "alt", "");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "button-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("A");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("B");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(fragment, [3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "imagePath", ["loc", [null, [2, 13], [2, 22]]]]]]], ["element", "action", [["get", "choice", ["loc", [null, [5, 20], [5, 26]]]], "A"], [], ["loc", [null, [5, 10], [5, 33]]]], ["element", "action", [["get", "choice", ["loc", [null, [6, 20], [6, 26]]]], "B"], [], ["loc", [null, [6, 10], [6, 33]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/color-test-results/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['results', 'color-results'],

    sampleA: _ember['default'].computed('results.@each.colorA', function () {
      var choice = this.get('results').filterBy('colorA').get('length');
      var total = this.get('results.length');
      return Math.floor(choice / total * 100);
    }),

    sampleB: _ember['default'].computed('results.@each.colorB', function () {
      var choice = this.get('results').filterBy('colorB').get('length');
      var total = this.get('results.length');
      return Math.floor(choice / total * 100);
    })

  });
});
define("lol-taste-test/components/color-test-results/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 46
          }
        },
        "moduleName": "lol-taste-test/components/color-test-results/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("How many correctly identifed");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("the sample without FD&C colors?");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["inline", "animated-counter", [], ["sample", ["subexpr", "@mut", [["get", "sampleB", ["loc", [null, [3, 31], [3, 38]]]]], [], []]], ["loc", [null, [3, 4], [3, 41]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('lol-taste-test/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTetherComponentsEmberTether) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTetherComponentsEmberTether['default'];
    }
  });
});
define('lol-taste-test/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('lol-taste-test/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, _emberCliFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('lol-taste-test/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, _emberCliFontAwesomeComponentsFaListIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaListIcon['default'];
    }
  });
});
define('lol-taste-test/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, _emberCliFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaList['default'];
    }
  });
});
define('lol-taste-test/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, _emberCliFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('lol-taste-test/components/information-cutsheet', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['information-cutsheet'],

    offsetY: 0,

    actions: {
      openModal: function openModal() {
        this.set('modalOpen', true);
        window.Draggable.create(".specifications-modal", { type: "scrollTop", edgeResistance: 0.7, throwProps: true });
      },
      closeModal: function closeModal() {
        this.set('modalOpen', false);
      }
    }
  });
});
define('lol-taste-test/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define("lol-taste-test/components/lf-outlet", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  exports["default"] = _liquidFireEmberInternals.StaticOutlet;
});
define('lol-taste-test/components/lf-overlay', ['exports', 'ember'], function (exports, _ember) {
  var COUNTER = '__lf-modal-open-counter';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['lf-overlay'],

    didInsertElement: function didInsertElement() {
      var body = _ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.addClass('lf-modal-open');
      body.data(COUNTER, counter + 1);
    },

    willDestroy: function willDestroy() {
      var body = _ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.data(COUNTER, counter - 1);
      if (counter < 2) {
        body.removeClass('lf-modal-open lf-modal-closing');
      }
    }
  });
});
define('lol-taste-test/components/liquid-bind', ['exports', 'ember'], function (exports, _ember) {

  var LiquidBind = _ember['default'].Component.extend({
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;
});
define('lol-taste-test/components/liquid-child', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['liquid-child'],

    didInsertElement: function didInsertElement() {
      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    }

  });
});
define("lol-taste-test/components/liquid-container", ["exports", "ember", "liquid-fire/growable", "lol-taste-test/components/liquid-measured"], function (exports, _ember, _liquidFireGrowable, _lolTasteTestComponentsLiquidMeasured) {
  exports["default"] = _ember["default"].Component.extend(_liquidFireGrowable["default"], {
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed || !this._wasInserted) {
        return;
      }
      if (arguments.length === 0) {
        on = this.get('liquidAnimating');
      } else {
        this.set('liquidAnimating', on);
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },

    startMonitoringSize: _ember["default"].on('didInsertElement', function () {
      this._wasInserted = true;
      this.updateAnimatingClass();
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = (0, _lolTasteTestComponentsLiquidMeasured.measure)(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure  children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = (0, _lolTasteTestComponentsLiquidMeasured.measure)(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = (0, _lolTasteTestComponentsLiquidMeasured.measure)(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });

  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = (0, _lolTasteTestComponentsLiquidMeasured.measure)(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }
});
define('lol-taste-test/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, _ember, _liquidFireEmberInternals) {

  var LiquidIf = _ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = (0, _liquidFireEmberInternals.shouldDisplay)(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;
});
define("lol-taste-test/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define('lol-taste-test/components/liquid-modal', ['exports', 'ember', 'ember-getowner-polyfill'], function (exports, _ember, _emberGetownerPolyfill) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['liquid-modal'],
    currentContext: _ember['default'].computed('owner.modalContexts.lastObject', function () {
      var context = this.get('owner.modalContexts.lastObject');
      if (context) {
        context.view = this.innerView(context);
      }
      return context;
    }),

    owner: _ember['default'].inject.service('liquid-fire-modals'),

    innerView: function innerView(current) {
      var self = this,
          name = current.get('name'),
          owner = (0, _emberGetownerPolyfill['default'])(this),
          component = owner.lookup('component-lookup:main').lookupFactory(name);
      _ember['default'].assert("Tried to render a modal using component '" + name + "', but couldn't find it.", !!component);

      var args = _ember['default'].copy(current.get('params'));

      args.registerMyself = _ember['default'].on('init', function () {
        self.set('innerViewInstance', this);
      });

      // set source so we can bind other params to it
      args._source = _ember['default'].computed(function () {
        return current.get("source");
      });

      var otherParams = current.get("options.otherParams");
      var from, to;
      for (from in otherParams) {
        to = otherParams[from];
        args[to] = _ember['default'].computed.alias("_source." + from);
      }

      var actions = current.get("options.actions") || {};

      // Override sendAction in the modal component so we can intercept and
      // dynamically dispatch to the controller as expected
      args.sendAction = function (name) {
        var actionName = actions[name];
        if (!actionName) {
          this._super.apply(this, Array.prototype.slice.call(arguments));
          return;
        }

        var controller = current.get("source");
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(actionName);
        controller.send.apply(controller, args);
      };

      return component.extend(args);
    },

    actions: {
      outsideClick: function outsideClick() {
        if (this.get('currentContext.options.dismissWithOutsideClick')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'outsideClick');
        }
      },
      escape: function escape() {
        if (this.get('currentContext.options.dismissWithEscape')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'escape');
        }
      },
      dismiss: function dismiss() {
        _ember['default'].$('body').addClass('lf-modal-closing');
        var source = this.get('currentContext.source'),
            proto = source.constructor.proto(),
            params = this.get('currentContext.options.withParams'),
            clearThem = {};

        for (var key in params) {
          if (proto[key] instanceof _ember['default'].ComputedProperty) {
            clearThem[key] = undefined;
          } else {
            clearThem[key] = proto[key];
          }
        }
        source.setProperties(clearThem);
      }
    }
  });

  function proxyToInnerInstance(self, message) {
    var vi = self.get('innerViewInstance');
    if (vi) {
      vi.send(message);
    }
  }
});
define('lol-taste-test/components/liquid-outlet', ['exports', 'ember'], function (exports, _ember) {

  var LiquidOutlet = _ember['default'].Component.extend({
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;
});
define("lol-taste-test/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('lol-taste-test/components/liquid-unless', ['exports', 'lol-taste-test/components/liquid-if'], function (exports, _lolTasteTestComponentsLiquidIf) {
  exports['default'] = _lolTasteTestComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});
define("lol-taste-test/components/liquid-versions", ["exports", "ember", "liquid-fire/ember-internals"], function (exports, _ember, _liquidFireEmberInternals) {

  var get = _ember["default"].get;
  var set = _ember["default"].set;

  exports["default"] = _ember["default"].Component.extend({
    tagName: "",
    name: 'liquid-versions',

    transitionMap: _ember["default"].inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      if (!this.versions || this._lastVersion !== this.getAttr('value')) {
        this.appendVersion();
        this._lastVersion = this.getAttr('value');
      }
    },

    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;

      if (!versions) {
        firstTime = true;
        versions = _ember["default"].A();
      } else {
        oldValue = versions[0];
      }

      // TODO: may need to extend the comparison to do the same kind of
      // key-based diffing that htmlbars is doing.
      if (!firstTime && (!oldValue && !newValue || oldValue === newValue)) {
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue,
        shouldRender: newValue || get(this, 'renderWhenFalse')
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!newVersion.shouldRender && !firstTime) {
        this._transition();
      }
    },

    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: _ember["default"].$((0, _liquidFireEmberInternals.containingElement)(this)),
        use: get(this, 'use'),
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no',
        helperName: get(this, 'name'),
        outletName: get(this, 'outletName')
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });
});
define('lol-taste-test/components/liquid-with', ['exports', 'ember'], function (exports, _ember) {

  var LiquidWith = _ember['default'].Component.extend({
    name: 'liquid-with',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    iAmDeprecated: _ember['default'].on('init', function () {
      _ember['default'].deprecate("liquid-with is deprecated, use liquid-bind instead -- it accepts a block now.");
    })
  });

  LiquidWith.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidWith;
});
define("lol-taste-test/components/lm-container", ["exports", "ember", "liquid-fire/tabbable", "liquid-fire/is-browser"], function (exports, _ember, _liquidFireTabbable, _liquidFireIsBrowser) {

  /**
   * If you do something to move focus outside of the browser (like
   * command+l to go to the address bar) and then tab back into the
   * window, capture it and focus the first tabbable element in an active
   * modal.
   */
  var lastOpenedModal = null;

  if ((0, _liquidFireIsBrowser["default"])()) {
    _ember["default"].$(document).on('focusin', handleTabIntoBrowser);
  }

  function handleTabIntoBrowser() {
    if (lastOpenedModal) {
      lastOpenedModal.focus();
    }
  }

  exports["default"] = _ember["default"].Component.extend({
    classNames: ['lm-container'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    keyUp: function keyUp(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.sendAction();
      }
    },

    keyDown: function keyDown(event) {
      // Tab key
      if (event.keyCode === 9) {
        this.constrainTabNavigation(event);
      }
    },

    didInsertElement: function didInsertElement() {
      this.focus();
      lastOpenedModal = this;
    },

    willDestroy: function willDestroy() {
      lastOpenedModal = null;
    },

    focus: function focus() {
      if (this.get('element').contains(document.activeElement)) {
        // just let it be if we already contain the activeElement
        return;
      }
      var target = this.$('[autofocus]');
      if (!target.length) {
        target = this.$(':tabbable');
      }

      if (!target.length) {
        target = this.$();
      }

      target[0].focus();
    },

    constrainTabNavigation: function constrainTabNavigation(event) {
      var tabbable = this.$(':tabbable');
      var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
      var leavingFinalTabbable = finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement;
      if (!leavingFinalTabbable) {
        return;
      }
      event.preventDefault();
      tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
    },

    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction('clickAway');
      }
    }
  });
});
/*
   Parts of this file were adapted from ic-modal

   https://github.com/instructure/ic-modal
   Released under The MIT License (MIT)
   Copyright (c) 2014 Instructure, Inc.
*/
define('lol-taste-test/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('lol-taste-test/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('lol-taste-test/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('lol-taste-test/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('lol-taste-test/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('lol-taste-test/components/power-select-multiple/options', ['exports', 'ember-power-select/components/power-select-multiple/options'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleOptions['default'];
    }
  });
});
define('lol-taste-test/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('lol-taste-test/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('lol-taste-test/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('lol-taste-test/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('lol-taste-test/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('lol-taste-test/components/signup-flavor/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),

    classNames: ['flavor'],
    classNameBindings: ['featured'],

    init: function init() {
      this._super.apply(this, arguments);
      var flavor = this.get('signup.flavors').findBy('number', this.get('number'));
      if (flavor) {
        this.set('selected', true);
      } else {
        flavor = this.get('store').createRecord('flavor', {
          name: this.get('item.Name'),
          number: this.get('item.SKU'),
          size: '8oz'
        });
      }
      if (this.get('featured')) {
        this.attrs.add(flavor);
      }
      this.set('flavor', flavor);
    },

    actions: {
      select: function select(selected) {
        var flavor = this.get('flavor');
        if (selected) {
          this.attrs.remove(flavor);
        } else {
          this.attrs.add(flavor);
        }
        this.toggleProperty('selected');
      },

      updateSize: function updateSize(size) {
        this.set('flavor.size', size);
      },

      openModal: function openModal() {
        this.set('detailsOpen', true);
      },

      closeModal: function closeModal() {
        this.set('detailsOpen', false);
      }
    }
  });
});
define("lol-taste-test/components/signup-flavor/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        8oz\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 6
              },
              "end": {
                "line": 22,
                "column": 6
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        1lb\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "assets/images/flavor_circle.png");
          dom.setAttribute(el1, "class", "flavor-circle");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h5");
          var el2 = dom.createTextNode("Request a sample of our featured flavor");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flavor-name");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flavor-details");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "text");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [5]);
          var element5 = dom.childAt(fragment, [7]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element4, 1, 1);
          morphs[1] = dom.createUnsafeMorphAt(element4, 3, 3);
          morphs[2] = dom.createUnsafeMorphAt(element4, 5, 5);
          morphs[3] = dom.createMorphAt(element5, 1, 1);
          morphs[4] = dom.createMorphAt(element5, 3, 3);
          morphs[5] = dom.createMorphAt(dom.childAt(element5, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "flavor.name", ["loc", [null, [5, 4], [5, 21]]]], ["inline", "if", [["get", "item.reg", ["loc", [null, [5, 29], [5, 37]]]], "<sup>&reg;</sup>"], [], ["loc", [null, [5, 22], [5, 60]]]], ["inline", "if", [["get", "item.tm", ["loc", [null, [5, 68], [5, 75]]]], "<sup>&trade;</sup>"], [], ["loc", [null, [5, 61], [5, 100]]]], ["block", "radio-button", [], ["value", "8oz", "groupValue", ["subexpr", "@mut", [["get", "flavor.size", ["loc", [null, [10, 19], [10, 30]]]]], [], []], "changed", "updateSize"], 0, null, ["loc", [null, [8, 6], [14, 23]]]], ["block", "radio-button", [], ["value", "1lb", "groupValue", ["subexpr", "@mut", [["get", "flavor.size", ["loc", [null, [18, 19], [18, 30]]]]], [], []], "changed", "updateSize"], 1, null, ["loc", [null, [16, 6], [22, 23]]]], ["content", "item.Description", ["loc", [null, [24, 8], [24, 30]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 34,
                  "column": 6
                },
                "end": {
                  "line": 40,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        8oz\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 42,
                  "column": 6
                },
                "end": {
                  "line": 48,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        1lb\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 2
              },
              "end": {
                "line": 53,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "flavor-details");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "text");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
            return morphs;
          },
          statements: [["block", "radio-button", [], ["value", "8oz", "groupValue", ["subexpr", "@mut", [["get", "flavor.size", ["loc", [null, [36, 19], [36, 30]]]]], [], []], "changed", "updateSize"], 0, null, ["loc", [null, [34, 6], [40, 23]]]], ["block", "radio-button", [], ["value", "1lb", "groupValue", ["subexpr", "@mut", [["get", "flavor.size", ["loc", [null, [44, 19], [44, 30]]]]], [], []], "changed", "updateSize"], 1, null, ["loc", [null, [42, 6], [48, 23]]]], ["content", "flavor.text", ["loc", [null, [50, 8], [50, 25]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 0
            },
            "end": {
              "line": 54,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flavor-modal-trigger");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(fragment, [3]);
          var morphs = new Array(10);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          morphs[2] = dom.createAttrMorph(element3, 'class');
          morphs[3] = dom.createElementMorph(element3);
          morphs[4] = dom.createMorphAt(element3, 1, 1);
          morphs[5] = dom.createMorphAt(element3, 3, 3);
          morphs[6] = dom.createUnsafeMorphAt(element3, 5, 5);
          morphs[7] = dom.createUnsafeMorphAt(element3, 7, 7);
          morphs[8] = dom.createUnsafeMorphAt(element3, 9, 9);
          morphs[9] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["element", "action", ["openModal"], [], ["loc", [null, [28, 36], [28, 60]]]], ["inline", "fa-icon", ["info-circle"], [], ["loc", [null, [28, 61], [28, 88]]]], ["attribute", "class", ["concat", ["flavor-name ", ["subexpr", "if", [["get", "selected", ["loc", [null, [29, 32], [29, 40]]]], "selected"], [], ["loc", [null, [29, 26], [29, 54]]]]]]], ["element", "action", ["select", ["get", "selected", ["loc", [null, [29, 75], [29, 83]]]]], [], ["loc", [null, [29, 56], [29, 85]]]], ["content", "flavor.number", ["loc", [null, [30, 4], [30, 23]]]], ["content", "flavor.name", ["loc", [null, [30, 24], [30, 41]]]], ["inline", "if", [["get", "item.reg", ["loc", [null, [30, 49], [30, 57]]]], "<sup>&reg;</sup>"], [], ["loc", [null, [30, 42], [30, 80]]]], ["inline", "if", [["get", "item.tm", ["loc", [null, [30, 88], [30, 95]]]], "<sup>&trade;</sup>"], [], ["loc", [null, [30, 81], [30, 120]]]], ["inline", "if", [["get", "item.k", ["loc", [null, [30, 128], [30, 134]]]], "<img class=\"tiny-k\" src=\"assets/images/k.jpg\">"], [], ["loc", [null, [30, 121], [30, 187]]]], ["block", "liquid-if", [["get", "selected", ["loc", [null, [32, 15], [32, 23]]]]], ["class", "flavor-animation"], 0, null, ["loc", [null, [32, 2], [53, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 57,
                "column": 2
              },
              "end": {
                "line": 97,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Calories:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Protein:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Total Carbs:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Total Sugar:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Total Fat:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Calcium:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tr");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createTextNode("Sodium:");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("td");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [5]);
            var morphs = new Array(9);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 0, 0);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 0, 0);
            morphs[5] = dom.createMorphAt(dom.childAt(element0, [7, 3]), 0, 0);
            morphs[6] = dom.createMorphAt(dom.childAt(element0, [9, 3]), 0, 0);
            morphs[7] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 0, 0);
            morphs[8] = dom.createMorphAt(dom.childAt(element0, [13, 3]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.Name", ["loc", [null, [65, 8], [65, 23]]]], ["content", "item.Description", ["loc", [null, [66, 7], [66, 29]]]], ["content", "item.Calories", ["loc", [null, [70, 12], [70, 31]]]], ["content", "item.Protein", ["loc", [null, [74, 12], [74, 30]]]], ["content", "item.TotalCarbohydrates", ["loc", [null, [78, 12], [78, 41]]]], ["content", "item.TotalSugar", ["loc", [null, [82, 12], [82, 33]]]], ["content", "item.TotalFat", ["loc", [null, [86, 12], [86, 31]]]], ["content", "item.Calcium", ["loc", [null, [90, 12], [90, 30]]]], ["content", "item.Sodium", ["loc", [null, [94, 12], [94, 29]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 0
            },
            "end": {
              "line": 98,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tether-dialog", [], ["close", ["subexpr", "action", ["closeModal"], [], ["loc", [null, [58, 10], [58, 31]]]], "translucentOverlay", true, "target", ".container", "targetAttachment", "middle center", "attachment", "middle center", "container-class", "flavor-detail-modal"], 0, null, ["loc", [null, [57, 2], [97, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 100,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/signup-flavor/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "featured", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [54, 7]]]], ["block", "if", [["get", "detailsOpen", ["loc", [null, [56, 6], [56, 17]]]]], [], 2, null, ["loc", [null, [56, 0], [98, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('lol-taste-test/components/signup-flavor-list/component', ['exports', 'ember', 'lol-taste-test/fixtures/flavors'], function (exports, _ember, _lolTasteTestFixturesFlavors) {
  exports['default'] = _ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {
      window.Draggable.create(".draggable", { type: "scrollTop", edgeResistance: 0.7, throwProps: true });
    },

    rotateOne: _ember['default'].computed('listOneOpen', function () {
      if (this.get('listOneOpen')) {
        return 180;
      }
      return 0;
    }),

    rotateTwo: _ember['default'].computed('listTwoOpen', function () {
      if (this.get('listTwoOpen')) {
        return 180;
      }
      return 0;
    }),

    featured: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].findBy('Featured');
    }),

    cheeseNormal: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Normal');
    }),

    cheeseTriple: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Triple');
    }),

    cheeseWhite: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'White');
    }),

    cheeseVarietal: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Varietal');
    }),

    seasoningDistinctive: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Distinctive');
    }),

    seasoningNacho: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Nacho');
    }),

    seasoningSourCream: _ember['default'].computed(function () {
      return _lolTasteTestFixturesFlavors['default'].filterBy('Category', 'Sour Cream');
    }),

    actions: {
      openListOne: function openListOne() {
        this.toggleProperty('listOneOpen');
        if (this.get('listTwoOpen')) {
          this.set('listTwoOpen', false);
        }
      },
      openListTwo: function openListTwo() {
        this.toggleProperty('listTwoOpen');
        if (this.get('listOneOpen')) {
          this.set('listOneOpen', false);
        }
      }
    }
  });
});
define("lol-taste-test/components/signup-flavor-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 6
                },
                "end": {
                  "line": 28,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [23, 17], [23, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [24, 15], [24, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [25, 14], [25, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [26, 17], [26, 23]]]]], [], []]], ["loc", [null, [22, 8], [27, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 6
                },
                "end": {
                  "line": 40,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [35, 17], [35, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [36, 15], [36, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [37, 14], [37, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [38, 17], [38, 23]]]]], [], []]], ["loc", [null, [34, 8], [39, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 6
                },
                "end": {
                  "line": 52,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [47, 17], [47, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [48, 15], [48, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [49, 14], [49, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [50, 17], [50, 23]]]]], [], []]], ["loc", [null, [46, 8], [51, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 6
                },
                "end": {
                  "line": 63,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [58, 17], [58, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [59, 15], [59, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [60, 14], [60, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [61, 17], [61, 23]]]]], [], []]], ["loc", [null, [57, 8], [62, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 65,
                "column": 4
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("Click on any spray-dried dairy powder for a product description and to select the sample size you’d like to receive:");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Cheddar Cheese Powders");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Triple Color");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("White");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Varietal");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 9, 9, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 13, 13, contextualElement);
            morphs[3] = dom.createMorphAt(fragment, 17, 17, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "cheeseNormal", ["loc", [null, [21, 14], [21, 26]]]]], [], 0, null, ["loc", [null, [21, 6], [28, 15]]]], ["block", "each", [["get", "cheeseTriple", ["loc", [null, [33, 14], [33, 26]]]]], [], 1, null, ["loc", [null, [33, 6], [40, 15]]]], ["block", "each", [["get", "cheeseWhite", ["loc", [null, [45, 14], [45, 25]]]]], [], 2, null, ["loc", [null, [45, 6], [52, 15]]]], ["block", "each", [["get", "cheeseVarietal", ["loc", [null, [56, 14], [56, 28]]]]], [], 3, null, ["loc", [null, [56, 6], [63, 15]]]]],
          locals: [],
          templates: [child0, child1, child2, child3]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 68,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flavor-list");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("SPRAY-DRIED DAIRY POWDERS ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["openListOne"], [], ["loc", [null, [14, 8], [14, 34]]]], ["inline", "fa-icon", [], ["icon", "chevron-up", "rotate", ["subexpr", "@mut", [["get", "rotateOne", ["loc", [null, [14, 97], [14, 106]]]]], [], []]], ["loc", [null, [14, 61], [14, 109]]]], ["block", "if", [["get", "listOneOpen", ["loc", [null, [16, 10], [16, 21]]]]], [], 0, null, ["loc", [null, [16, 4], [65, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 81,
                  "column": 6
                },
                "end": {
                  "line": 88,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [83, 17], [83, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [84, 15], [84, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [85, 14], [85, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [86, 17], [86, 23]]]]], [], []]], ["loc", [null, [82, 8], [87, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 94,
                  "column": 6
                },
                "end": {
                  "line": 101,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [96, 17], [96, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [97, 15], [97, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [98, 14], [98, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [99, 17], [99, 23]]]]], [], []]], ["loc", [null, [95, 8], [100, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 105,
                  "column": 6
                },
                "end": {
                  "line": 112,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [107, 17], [107, 23]]]]], [], []], "item", ["subexpr", "@mut", [["get", "flavor", ["loc", [null, [108, 15], [108, 21]]]]], [], []], "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [109, 14], [109, 17]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [110, 17], [110, 23]]]]], [], []]], ["loc", [null, [106, 8], [111, 10]]]]],
            locals: ["flavor"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 4
              },
              "end": {
                "line": 114,
                "column": 4
              }
            },
            "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("Click on any dry-blended seasoning for a product description and to select the sample size you’d like to receive:");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Distinctive Flavors");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Nacho");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h5");
            var el2 = dom.createTextNode("Sour Cream");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 9, 9, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 13, 13, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "seasoningDistinctive", ["loc", [null, [81, 14], [81, 34]]]]], [], 0, null, ["loc", [null, [81, 6], [88, 15]]]], ["block", "each", [["get", "seasoningNacho", ["loc", [null, [94, 14], [94, 28]]]]], [], 1, null, ["loc", [null, [94, 6], [101, 15]]]], ["block", "each", [["get", "seasoningSourCream", ["loc", [null, [105, 14], [105, 32]]]]], [], 2, null, ["loc", [null, [105, 6], [112, 15]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 0
            },
            "end": {
              "line": 117,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flavor-list");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("DRY-BLENDED SEASONINGS ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["openListTwo"], [], ["loc", [null, [74, 8], [74, 34]]]], ["inline", "fa-icon", [], ["icon", "chevron-up", "rotate", ["subexpr", "@mut", [["get", "rotateOne", ["loc", [null, [74, 94], [74, 103]]]]], [], []]], ["loc", [null, [74, 58], [74, 106]]]], ["block", "if", [["get", "listTwoOpen", ["loc", [null, [76, 10], [76, 21]]]]], [], 0, null, ["loc", [null, [76, 4], [114, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 124,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/signup-flavor-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "buttons");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "submit back");
        var el3 = dom.createTextNode("back");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "submit");
        var el3 = dom.createTextNode("submit");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createElementMorph(element6);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "signup-flavor", [], ["signup", ["subexpr", "@mut", [["get", "signup", ["loc", [null, [2, 9], [2, 15]]]]], [], []], "item", ["subexpr", "@mut", [["get", "featured", ["loc", [null, [3, 7], [3, 15]]]]], [], []], "featured", true, "add", ["subexpr", "@mut", [["get", "add", ["loc", [null, [5, 6], [5, 9]]]]], [], []], "remove", ["subexpr", "@mut", [["get", "remove", ["loc", [null, [6, 9], [6, 15]]]]], [], []]], ["loc", [null, [1, 0], [7, 2]]]], ["block", "liquid-spacer", [], ["class", "flavor-list-animate", "growDuration", 500], 0, null, ["loc", [null, [11, 0], [68, 18]]]], ["block", "liquid-spacer", [], ["class", "flavor-list-animate", "growDuration", 500], 1, null, ["loc", [null, [71, 0], [117, 18]]]], ["element", "action", [["get", "back", ["loc", [null, [120, 40], [120, 44]]]]], [], ["loc", [null, [120, 30], [120, 47]]]], ["element", "action", [["get", "save", ["loc", [null, [121, 35], [121, 39]]]], ["get", "signup", ["loc", [null, [121, 40], [121, 46]]]]], [], ["loc", [null, [121, 25], [121, 48]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('lol-taste-test/components/signup-form/component', ['exports', 'ember', 'ember-countries', 'lol-taste-test/utils/provinces'], function (exports, _ember, _emberCountries, _lolTasteTestUtilsProvinces) {
  exports['default'] = _ember['default'].Component.extend({

    countryList: _emberCountries.countries,
    stateList: _ember['default'].computed('selectedCountry', function () {
      return _lolTasteTestUtilsProvinces['default'].filterBy('country', this.get('selectedCountry.iso'));
    }),

    selectedCountry: _ember['default'].computed(function () {
      return _emberCountries.countries.findBy('iso', 'US');
    }),

    selectedState: _ember['default'].computed('selectedCountry', {
      get: function get(key) {
        var state = this.get('signup.state');
        return this.get('stateList').findBy('name', state);
      },
      set: function set(key, value) {
        this.set('signup.state', value.name);
        return value;
      }
    }),

    stateMatcher: function stateMatcher(state, word) {
      var name = state.name.toLowerCase();
      var re = new RegExp('^' + word.toLowerCase());

      if (name.match(re)) {
        return 1;
      }
      return -1;
    },

    countryMatcher: function countryMatcher(country, word) {
      var name = country.country.toLowerCase();
      var re = new RegExp('^' + word.toLowerCase());

      if (name.match(re)) {
        return 1;
      }
      return -1;
    },

    didInsertElement: function didInsertElement() {
      var keyboard = _ember['default'].$('.input').keyboard({

        acceptValid: true,

        initialFocus: false,

        enterNavigation: true,

        autoAccept: true,

        tabNavigation: true,

        usePreview: false,

        reposition: true,

        appendTo: '.container',

        customLayout: {
          'default': ['1 2 3 4 5 6 7 8 9 0 - = {bksp}', 'q w e r t y u i o p', "a s d f g h j k l ;", 'z x c v b n m . @', '.com .net .edu .gov', '{space} {accept}']

        },

        // accepted: (event, keyboard, el) => {
        // let email = Ember.$(el).val()
        // if(email){
        //   let pdfs = this.get('pdfs').filterBy('send').mapBy('pdf');
        //   this.attrs.email(email,pdfs);
        //   keyboard.enabled = false;
        //   keyboard.toggle();
        // }
        // },

        // validate: function(e, key, el) {
        // Accept only numeric
        // var test = /.+@.+\..+/i.test(key);

        // return test;
        // },

        // appendTo: '.keyboard-container',

        position: {
          of: '.form-container',
          my: 'center top',
          at: 'center bottom',
          at2: 'center bottom',
          collision: 'fit fit'
        }

      });

      this.set('keyboard', keyboard);
    },

    willDestroyElement: function willDestroyElement() {
      this.get('keyboard').getkeyboard().destroy();
    },

    actions: {
      updateCountry: function updateCountry(country) {
        this.set('selectedCountry', country);
        this.set('signup.country', country.iso);
      },
      updateState: function updateState(state) {
        this.set('selectedState', state);
        this.set('signup.state', value.name);
      },
      validate: function validate(signup) {
        var _this = this;

        signup.validate().then(function () {
          _this.attrs.next(signup);
        }, function () {
          _this.set('validated', true);
        });
      }
    }
  });
});
define("lol-taste-test/components/signup-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [4, 25], [4, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.name", ["loc", [null, [3, 10], [3, 28]]]]], [], 0, null, ["loc", [null, [3, 2], [5, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [11, 25], [11, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.company", ["loc", [null, [10, 10], [10, 31]]]]], [], 0, null, ["loc", [null, [10, 2], [12, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [18, 25], [18, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.title", ["loc", [null, [17, 10], [17, 29]]]]], [], 0, null, ["loc", [null, [17, 2], [19, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 2
              },
              "end": {
                "line": 26,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [25, 25], [25, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.email", ["loc", [null, [24, 10], [24, 29]]]]], [], 0, null, ["loc", [null, [24, 2], [26, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 2
              },
              "end": {
                "line": 33,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [32, 25], [32, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 34,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.phone", ["loc", [null, [31, 10], [31, 29]]]]], [], 0, null, ["loc", [null, [31, 2], [33, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 2
              },
              "end": {
                "line": 40,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [39, 25], [39, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 0
            },
            "end": {
              "line": 41,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.address", ["loc", [null, [38, 10], [38, 31]]]]], [], 0, null, ["loc", [null, [38, 2], [40, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 2
              },
              "end": {
                "line": 47,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [46, 25], [46, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 0
            },
            "end": {
              "line": 48,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.city", ["loc", [null, [45, 10], [45, 28]]]]], [], 0, null, ["loc", [null, [45, 2], [47, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 52,
                "column": 2
              },
              "end": {
                "line": 54,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [53, 25], [53, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 0
            },
            "end": {
              "line": 55,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.zip", ["loc", [null, [52, 10], [52, 27]]]]], [], 0, null, ["loc", [null, [52, 2], [54, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child8 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 61,
                "column": 2
              },
              "end": {
                "line": 63,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/components/signup-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "error");
            var el2 = dom.createTextNode("*");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "error", ["loc", [null, [62, 25], [62, 36]]]]],
          locals: ["error"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 60,
              "column": 0
            },
            "end": {
              "line": 64,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/signup-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "signup.errors.state", ["loc", [null, [61, 10], [61, 29]]]]], [], 0, null, ["loc", [null, [61, 2], [63, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 87,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/signup-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "buttons");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "submit");
        var el3 = dom.createTextNode("next");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [31, 1]);
        var morphs = new Array(20);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 11, 11, contextualElement);
        morphs[8] = dom.createMorphAt(fragment, 13, 13, contextualElement);
        morphs[9] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        morphs[10] = dom.createMorphAt(fragment, 16, 16, contextualElement);
        morphs[11] = dom.createMorphAt(fragment, 17, 17, contextualElement);
        morphs[12] = dom.createMorphAt(fragment, 19, 19, contextualElement);
        morphs[13] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        morphs[14] = dom.createMorphAt(fragment, 22, 22, contextualElement);
        morphs[15] = dom.createMorphAt(fragment, 23, 23, contextualElement);
        morphs[16] = dom.createMorphAt(fragment, 25, 25, contextualElement);
        morphs[17] = dom.createMorphAt(fragment, 27, 27, contextualElement);
        morphs[18] = dom.createMorphAt(fragment, 28, 28, contextualElement);
        morphs[19] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["block", "if", [["get", "validated", ["loc", [null, [2, 6], [2, 15]]]]], [], 0, null, ["loc", [null, [2, 0], [6, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.name", ["loc", [null, [7, 15], [7, 26]]]]], [], []], "placeholder", "full name", "class", "input"], ["loc", [null, [7, 0], [7, 66]]]], ["block", "if", [["get", "validated", ["loc", [null, [9, 6], [9, 15]]]]], [], 1, null, ["loc", [null, [9, 0], [13, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.company", ["loc", [null, [14, 15], [14, 29]]]]], [], []], "placeholder", "company", "class", "input"], ["loc", [null, [14, 0], [14, 67]]]], ["block", "if", [["get", "validated", ["loc", [null, [16, 6], [16, 15]]]]], [], 2, null, ["loc", [null, [16, 0], [20, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.title", ["loc", [null, [21, 15], [21, 27]]]]], [], []], "placeholder", "title", "class", "input"], ["loc", [null, [21, 0], [21, 63]]]], ["block", "if", [["get", "validated", ["loc", [null, [23, 6], [23, 15]]]]], [], 3, null, ["loc", [null, [23, 0], [27, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.email", ["loc", [null, [28, 15], [28, 27]]]]], [], []], "placeholder", "email", "class", "input"], ["loc", [null, [28, 0], [28, 63]]]], ["block", "if", [["get", "validated", ["loc", [null, [30, 6], [30, 15]]]]], [], 4, null, ["loc", [null, [30, 0], [34, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.phone", ["loc", [null, [35, 15], [35, 27]]]]], [], []], "placeholder", "phone", "class", "input"], ["loc", [null, [35, 0], [35, 63]]]], ["block", "if", [["get", "validated", ["loc", [null, [37, 6], [37, 15]]]]], [], 5, null, ["loc", [null, [37, 0], [41, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.address", ["loc", [null, [42, 15], [42, 29]]]]], [], []], "placeholder", "street address", "class", "input"], ["loc", [null, [42, 0], [42, 74]]]], ["block", "if", [["get", "validated", ["loc", [null, [44, 6], [44, 15]]]]], [], 6, null, ["loc", [null, [44, 0], [48, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.city", ["loc", [null, [49, 15], [49, 26]]]]], [], []], "placeholder", "city", "class", "input"], ["loc", [null, [49, 0], [49, 61]]]], ["block", "if", [["get", "validated", ["loc", [null, [51, 6], [51, 15]]]]], [], 7, null, ["loc", [null, [51, 0], [55, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.zip", ["loc", [null, [56, 15], [56, 25]]]]], [], []], "placeholder", "zip", "class", "input"], ["loc", [null, [56, 0], [56, 59]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.country", ["loc", [null, [58, 15], [58, 29]]]]], [], []], "placeholder", "country", "class", "input"], ["loc", [null, [58, 0], [58, 68]]]], ["block", "if", [["get", "validated", ["loc", [null, [60, 6], [60, 15]]]]], [], 8, null, ["loc", [null, [60, 0], [64, 7]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "signup.state", ["loc", [null, [65, 15], [65, 27]]]]], [], []], "placeholder", "state", "class", "input"], ["loc", [null, [65, 0], [65, 64]]]], ["element", "action", ["validate", ["get", "signup", ["loc", [null, [83, 46], [83, 52]]]]], [], ["loc", [null, [83, 25], [83, 54]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  })());
});
define('lol-taste-test/components/taste-test/component', ['exports', 'ember', 'lol-taste-test/mixins/text-image'], function (exports, _ember, _lolTasteTestMixinsTextImage) {
  exports['default'] = _ember['default'].Component.extend(_lolTasteTestMixinsTextImage['default'], {
    i18n: _ember['default'].inject.service(),
    classNames: ['test-step', 'taste'],
    image: 'taste'
  });
});
define("lol-taste-test/components/taste-test/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/taste-test/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "alt", "");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "button-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("A");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("B");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "imagePath", ["loc", [null, [1, 13], [1, 22]]]]]]], ["element", "action", [["get", "choice", ["loc", [null, [4, 20], [4, 26]]]], "A"], [], ["loc", [null, [4, 10], [4, 33]]]], ["element", "action", [["get", "choice", ["loc", [null, [5, 20], [5, 26]]]], "B"], [], ["loc", [null, [5, 10], [5, 33]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/taste-test-results/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['results', 'taste-results'],

    showSampleA: _ember['default'].computed.equal('sample', 'a'),
    showSampleB: _ember['default'].computed.equal('sample', 'b'),

    sampleA: _ember['default'].computed('results.@each.tasteA', function () {
      var choice = this.get('results').filterBy('tasteA').get('length');
      var total = this.get('results.length');
      return Math.floor(choice / total * 100);
    }),
    sampleB: _ember['default'].computed('results.@each.tasteB', function () {
      var choice = this.get('results').filterBy('tasteB').get('length');
      var total = this.get('results.length');
      return Math.floor(choice / total * 100);
    })
  });
});
define("lol-taste-test/components/taste-test-results/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/taste-test-results/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("How many preferred");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("sample A?");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["inline", "animated-counter", [], ["sample", ["subexpr", "@mut", [["get", "sampleA", ["loc", [null, [4, 33], [4, 40]]]]], [], []]], ["loc", [null, [4, 6], [4, 43]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/components/taste-test-results/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("How many preferred");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("sample B?");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["inline", "animated-counter", [], ["sample", ["subexpr", "@mut", [["get", "sampleB", ["loc", [null, [9, 33], [9, 40]]]]], [], []]], ["loc", [null, [9, 6], [9, 43]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/taste-test-results/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showSampleA", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [5, 7]]]], ["block", "if", [["get", "showSampleB", ["loc", [null, [7, 6], [7, 17]]]]], [], 1, null, ["loc", [null, [7, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('lol-taste-test/components/test-call/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      _ember['default'].run.later(this, this._transition, 7000);
    },

    _transition: function _transition() {
      this.attrs.transition();
    }
  });
});
define("lol-taste-test/components/test-call/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/test-call/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "src", "assets/images/results_call.png");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/test-fact/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    facts: ['assets/images/fact_01.png', 'assets/images/fact_02.png', 'assets/images/fact_03.png', 'assets/images/fact_04.png', 'assets/images/fact_05.png', 'assets/images/fact_06.png'],

    fact: _ember['default'].computed(function () {
      var facts = this.get('facts');
      var random = Math.floor(Math.random() * facts.length);
      return facts[random];
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      _ember['default'].run.later(this, this._transition, 12000);
    },

    _transition: function _transition() {
      this.attrs.transition();
    }
  });
});
define("lol-taste-test/components/test-fact/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/test-fact/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "fact", ["loc", [null, [1, 13], [1, 17]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/test-language/component', ['exports', 'ember', 'lol-taste-test/mixins/text-image'], function (exports, _ember, _lolTasteTestMixinsTextImage) {
  exports['default'] = _ember['default'].Component.extend(_lolTasteTestMixinsTextImage['default'], {
    i18n: _ember['default'].inject.service(),

    classNames: ['test-step', 'language'],
    image: 'language'
  });
});
define("lol-taste-test/components/test-language/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 54
          }
        },
        "moduleName": "lol-taste-test/components/test-language/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "alt", "");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "button-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "language");
        var el3 = dom.createTextNode("English");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "language");
        var el3 = dom.createTextNode("Espanol");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "imagePath", ["loc", [null, [1, 13], [1, 22]]]]]]], ["element", "action", [["get", "choice", ["loc", [null, [4, 20], [4, 26]]]], "en"], [], ["loc", [null, [4, 10], [4, 34]]]], ["element", "action", [["get", "choice", ["loc", [null, [5, 20], [5, 26]]]], "es"], [], ["loc", [null, [5, 10], [5, 34]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/test-response/component', ['exports', 'ember', 'lol-taste-test/mixins/text-image'], function (exports, _ember, _lolTasteTestMixinsTextImage) {
  exports['default'] = _ember['default'].Component.extend(_lolTasteTestMixinsTextImage['default'], {
    i18n: _ember['default'].inject.service(),
    classNames: ['test-step', 'response'],

    image: _ember['default'].computed('sample.{colorA,colorB}', 'thanks', function () {
      if (this.get('thanks')) {
        return 'thanks';
      }
      if (this.get('sample.colorA')) {
        return 'wrong';
      }
      return 'right';
    }),

    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].run.later(this, this.attrs.reset, 5000);
    }

  });
});
define("lol-taste-test/components/test-response/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/test-response/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "alt", "");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "imagePath", ["loc", [null, [1, 13], [1, 22]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/test-results/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    init: function init() {
      this._super.apply(this, arguments);
      this.attrs.refresh();
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      _ember['default'].run.later(this, this._transition, 12000);
    },

    _transition: function _transition() {
      this.attrs.transition();
    }
  });
});
define("lol-taste-test/components/test-results/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/components/test-results/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "src", "assets/images/results_title.png");
        dom.setAttribute(el1, "alt", "");
        dom.setAttribute(el1, "class", "text-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        return morphs;
      },
      statements: [["inline", "taste-test-results", [], ["results", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 32], [3, 37]]]]], [], []], "sample", ["subexpr", "@mut", [["get", "sample", ["loc", [null, [3, 45], [3, 51]]]]], [], []]], ["loc", [null, [3, 2], [3, 53]]]], ["inline", "color-test-results", [], ["results", ["subexpr", "@mut", [["get", "model", ["loc", [null, [5, 32], [5, 37]]]]], [], []]], ["loc", [null, [5, 2], [5, 40]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('lol-taste-test/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('lol-taste-test/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('lol-taste-test/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("lol-taste-test/fixtures/flavors", ["exports"], function (exports) {
  exports["default"] = [{
    "Category": "Normal",
    "SKU": 49017,
    "Name": "CheddarChroma",
    "Description": "A cheddar and blue cheese flavor profile made using vegetable extracts to deliver a bright orange color—formulated without the use of FD&C colors.",
    "Calories": "396 kcal",
    "Protein": "12 g",
    "TotalCarbohydrates": "57 g",
    "TotalSugar": "33 g",
    "TotalFat": "14 g",
    "Calcium": "504 mg",
    "Sodium": "3890 mg",
    "Featured": true
  }, {
    "Category": 'Normal',
    "SKU": 49197,
    "Name": "Cheddease 504",
    "Description": "A versatile cheddar cheese powder that delivers a vibrant color—formulated without the use of FD&C colors.",
    "Calories": "419  kcal",
    "Protein": "14 g",
    "TotalCarbohydrates": "47 g",
    "TotalSugar": "43 g",
    "TotalFat": "19 g",
    "Calcium": "702 mg",
    "Sodium": "3835 mg"
  }, {
    "Category": 'Normal',
    "SKU": 49103,
    "Name": "Cheddease 502",
    "Description": "A high-flavor cheddar cheese powder that blends a variety of dairy ingredients to deliver a well-rounded cheese profile.",
    "Calories": "433 kcal",
    "Protein": "13 g",
    "TotalCarbohydrates": "50 g",
    "TotalSugar": "37 g",
    "TotalFat": "21 g",
    "Calcium": "537 mg",
    "Sodium": "3753 mg"
  }, {
    "Category": 'Normal',
    "SKU": 49173,
    "Name": "Cheddease 271",
    "Description": "Extra sharp cheddar cheese blended with buttermilk and whey for snack seasonings.",
    "Calories": "447 kcal",
    "Protein": "24 g",
    "TotalCarbohydrates": "35 g",
    "TotalSugar": "34 g",
    "TotalFat": "24 g",
    "Calcium": "894 mg",
    "Sodium": "3897 mg"
  }, {
    "Category": 'Normal',
    "SKU": 49320,
    "Name": "Cheddease 310",
    "Description": "A high-flavored blend of cheddar and blue cheese along with dairy and other ingredients to deliver a well-rounded cheese profile.",
    "Calories": "432 kcal",
    "Protein": "16 g",
    "TotalCarbohydrates": "43 g",
    "TotalSugar": "30 g",
    "TotalFat": "22 g",
    "Calcium": "661 mg",
    "Sodium": "4384 mg"
  }, {
    "Category": 'Normal',
    "SKU": 49330,
    "Name": "Cheddease 1401",
    "Description": "An economical cheese powder with a well-rounded cheese flavor profile.",
    "Calories": "408 kcal",
    "Protein": "11 g",
    "TotalCarbohydrates": "56 g",
    "TotalSugar": "32 g",
    "TotalFat": "16 g",
    "Calcium": "497 mg",
    "Sodium": "3801 mg"
  }, {
    "Category": 'Normal',
    "SKU": 49638,
    "Name": "Dry Butter Powder 633",
    "Description": "A butter powder blend with a well-rounded butter flavor.",
    "Calories": "660 kcal",
    "Protein": "13 g",
    "TotalCarbohydrates": "19 g",
    "TotalSugar": "19 g",
    "TotalFat": "59 g",
    "Calcium": "437 mg",
    "Sodium": "1060 mg"
  }, {
    "Category": "Triple",
    "SKU": 49012,
    "Name": "Cheddease M240",
    "Description": "An economical cheese powder with a cheddar and blue cheese flavor profile.",
    "Calories": "400 kcal",
    "Protein": "12 g",
    "TotalCarbohydrates": "56 g",
    "TotalSugar": "32 g",
    "TotalFat": "14 g",
    "Calcium": "583 mg",
    "Sodium": "3707 mg"
  }, {
    "Category": 'Triple',
    "SKU": 49213,
    "Name": "Cheddease 270",
    "Description": "Designed for sauces and snack seasonings—an extra sharp cheddar cheese blended with buttermilk and whey.",
    "Calories": "412 kcal",
    "Protein": "24 g",
    "TotalCarbohydrates": "38 g",
    "TotalSugar": "37 g",
    "TotalFat": "19 g",
    "Calcium": "853 mg",
    "Sodium": "4472 mg"
  }, {
    "Category": 'Triple',
    "SKU": 49258,
    "Name": "Cheddease 275",
    "Description": "Designed for snack seasonings—an extra sharp cheddar cheese powder with buttermilk and whey",
    "Calories": "413 kcal",
    "Protein": "23 g",
    "TotalCarbohydrates": "42 g",
    "TotalSugar": "32 g",
    "TotalFat": "1 g",
    "Calcium": "822 mg",
    "Sodium": "4021 mg"
  }, {
    "Category": 'Triple',
    "SKU": 49318,
    "Name": "Cheddease 310",
    "Description": "A high-flavored blend of cheddar and blue cheese along with dairy and other ingredients to deliver a well-rounded cheese profile.",
    "Calories": "432 kcal",
    "Protein": "15 g",
    "TotalCarbohydrates": "44 g",
    "TotalSugar": "31 g",
    "TotalFat": "22 g",
    "Calcium": "604 mg",
    "Sodium": "4389 mg"
  }, {
    "Category": 'Triple',
    "SKU": 49329,
    "Name": "Cheddease 240",
    "Description": "An economical cheese powder with a cheddar and blue cheese flavor profile.",
    "Calories": "400 kcal",
    "Protein": "14 g",
    "TotalCarbohydrates": "51 g",
    "TotalSugar": "34 g",
    "TotalFat": "16 g",
    "Calcium": "666 mg",
    "Sodium": "3869 mg"
  }, {
    "Category": "White",
    "SKU": 49014,
    "Name": "Cheddease M240",
    "Description": "An economical cheese powder with a well-rounded cheese profile.",
    "Calories": "394 kcal",
    "Protein": "12 g",
    "TotalCarbohydrates": "57 g",
    "TotalSugar": "33 g",
    "TotalFat": "14 g",
    "Calcium": "479 mg",
    "Sodium": "4158 mg"
  }, {
    "Category": 'White',
    "SKU": 49174,
    "Name": "Cheddease 310",
    "Description": "A high-flavor blend of cheddar and blue cheese along with dairy and other ingredients to deliver a well-rounded cheese profile.",
    "Calories": "409 kcal",
    "Protein": "23 g",
    "TotalCarbohydrates": "43 g",
    "TotalSugar": "31 g",
    "TotalFat": "17 g",
    "Calcium": "785 mg",
    "Sodium": "3297 mg"
  }, {
    "Category": 'White',
    "SKU": 49266,
    "Name": "Cheddease 275",
    "Description": "Designed for snack seasonings—an extra sharp cheddar cheese with buttermilk and whey.",
    "Calories": "418 kcal",
    "Protein": "23 g",
    "TotalCarbohydrates": "42 g",
    "TotalSugar": "33 g",
    "TotalFat": "18 g",
    "Calcium": "835 mg",
    "Sodium": "3737 mg"
  }, {
    "Category": 'White',
    "SKU": 49270,
    "Name": "LaChedda",
    "Description": "Cheddar cheese powder that provides a sharp flavor and mouthfeel for building a long-lasting cheddar impact.",
    "Calories": "574 kcal",
    "Protein": "35 g",
    "TotalCarbohydrates": "3 g",
    "TotalSugar": "1 g",
    "TotalFat": "47 g",
    "Calcium": "1004 mg",
    "Sodium": "3010 mg"
  }, {
    "Category": 'White',
    "SKU": 49316,
    "Name": "Cheddease 925",
    "Description": "Designed for sauces and snack seasonings—an extra sharp cheddar cheese blended with buttermilk and whey.",
    "Calories": "428 kcal",
    "Protein": "25 g",
    "TotalCarbohydrates": "34 g",
    "TotalSugar": "34 g",
    "TotalFat": "21 g",
    "Calcium": "913 mg",
    "Sodium": "4326 mg"
  }, {
    "Category": 'White',
    "SKU": 49413,
    "Name": "Cheddease 240",
    "Description": "An economical cheese powder with a cheddar and blue cheese flavor profile.",
    "Calories": "402 kcal",
    "Protein": "14 g",
    "TotalCarbohydrates": "51 g",
    "TotalSugar": "34 g",
    "TotalFat": "16 g",
    "Calcium": "672 mg",
    "Sodium": "3846 mg"
  }, {
    "Category": "Varietal",
    "SKU": 49656,
    "Name": "Dried Sour Cream Blend",
    "Description": "A smooth, well-rounded cultured sour cream flavor.",
    "Calories": "580 kcal",
    "Protein": "15 g",
    "TotalCarbohydrates": "27 g",
    "TotalSugar": "18 g",
    "TotalFat": "51 g",
    "Calcium": "581 mg",
    "Sodium": "232 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49734,
    "Name": "Three Cheese Blend",
    "Description": "A balanced cheese powder blend.",
    "Calories": "437 kcal",
    "Protein": "20 g",
    "TotalCarbohydrates": "45 g",
    "TotalSugar": "29 g",
    "TotalFat": "20 g",
    "Calcium": "600 mg",
    "Sodium": "3393 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49664,
    "Name": "Sour Cream Powder Blend",
    "Description": "A rich, cultured blended sour cream powder.",
    "Calories": "474 kcal",
    "Protein": "18 g",
    "TotalCarbohydrates": "50 g",
    "TotalSugar": "38 g",
    "TotalFat": "27 g",
    "Calcium": "724 mg",
    "Sodium": 491
  }, {
    "Category": 'Varietal',
    "SKU": 25665,
    "Name": "Blend Master Dry Cream Blend",
    "Description": "A blend of cream and other dairy ingredients when dried, is an economical replacement for liquid cream.",
    "Calories": "568 kcal",
    "Protein": "18 g",
    "TotalCarbohydrates": "34 g",
    "TotalSugar": "34 g",
    "TotalFat": "40 g",
    "Calcium": "280 mg",
    "Sodium": "426 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49300,
    "Name": "Monterey Jack Swiss Blend",
    "Description": "A balanced blend of Monterey Jack and Swiss cheese provides a smooth flavor and full mouthfeel.",
    "Calories": "531 kcal",
    "Protein": "27 g",
    "TotalCarbohydrates": "29 g",
    "TotalSugar": "10 g",
    "TotalFat": "35 g",
    "Calcium": "890 mg",
    "Sodium": "1448 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49770,
    "Name": "Dried Romano Cheese Powder",
    "Description": "A high-flavor cheese powder blend with a sharp Romano cheese flavor.",
    "Calories": "438 kcal",
    "Protein": "28 g",
    "TotalCarbohydrates": "39 g",
    "TotalSugar": "36 g",
    "TotalFat": "19 g",
    "Calcium": "1116 mg",
    "Sodium": "2139 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49790,
    "Name": "Dried Parmesan Blend",
    "Description": "An economical, authentic flavor cheese powder blend with a sharp Parmesan cheese flavor.",
    "Calories": "434 kcal",
    "Protein": "30 g",
    "TotalCarbohydrates": "37 g",
    "TotalSugar": "37 g",
    "TotalFat": "18 g",
    "Calcium": "1181 mg",
    "Sodium": "2382 mg"
  }, {
    "Category": 'Varietal',
    "SKU": 49799,
    "Name": "Parmesan Cheese Blend",
    "Description": "A high-flavor cheese powder blend with a sharp Parmesan cheese flavor.",
    "Calories": "425 kcal",
    "Protein": "28 g",
    "TotalCarbohydrates": "42 g",
    "TotalSugar": "42 g",
    "TotalFat": "16 g",
    "Calcium": "1135 mg",
    "Sodium": "2311 mg"
  }, {
    "Category": "Distictive",
    "SKU": 25161,
    "Name": "Green Chile Queso",
    "Description": "The taste of Tex-Mex-style melted cheese with green chiles, white pepper, chili pepper and jalapeños blended with tomato, onion and garlic.",
    "Calories": "405 kcal",
    "Protein": "15 g",
    "TotalCarbohydrates": "42 g",
    "TotalSugar": "25 g",
    "TotalFat": "21 g",
    "Calcium": "454 mg",
    "Sodium": "6353 mg"
  }, {
    "Category": 'Distinctive',
    "SKU": 25165,
    "Name": "Firecracker",
    "Description": "Designed for topical application—a blended seasoning with a blast of jalapeño flavor and lingering heat, enhanced with aged cayenne pepper notes and savory cheese undertones.",
    "Calories": "281 kcal",
    "Protein": "12 g",
    "TotalCarbohydrates": "42 g",
    "TotalSugar": "27 g",
    "TotalFat": "9 g",
    "Calcium": "450 mg",
    "Sodium": "10951 mg"
  }, {
    "Category": 'Distinctive',
    "SKU": 25167,
    "Name": "Hot Buttery Cinnamon",
    "Description": "A sweet and spicy blend with red-hot cinnamon and butter flavors.",
    "Calories": "412 kcal",
    "Protein": "3 g",
    "TotalCarbohydrates": "80 g",
    "TotalSugar": "65 g",
    "TotalFat": "11 g",
    "Calcium": "180 mg",
    "Sodium": "1354 mg"
  }, {
    "Category": 'Distinctive',
    "SKU": 25344,
    "Name": "Ranch Seasoning",
    "Description": "Creamy buttermilk, tomato, garlic and onion blended with bold and tangy spices.",
    "Calories": "301 kcal",
    "Protein": "18 g",
    "TotalCarbohydrates": "50 g",
    "TotalSugar": "31 g",
    "TotalFat": "4.5 g",
    "Calcium": "564 mg",
    "Sodium": "8312 mg"
  }, {
    "Category": "Nacho",
    "SKU": 25177,
    "Name": "Nacho Seasoning",
    "Description": "A balanced blend of cheese, spice and garlic.",
    "Calories": "320 kcal",
    "Protein": "13 g",
    "TotalCarbohydrates": "48 g",
    "TotalSugar": "27 g",
    "TotalFat": "9 g",
    "Calcium": "446 mg",
    "Sodium": "8915 mg"
  }, {
    "Category": 'Nacho',
    "SKU": 25350,
    "Name": "Nacho Seasoning",
    "Description": "A high-flavor blend of cheese, spice and garlic.",
    "Calories": "374 kcal",
    "Protein": "17 g",
    "TotalCarbohydrates": "48 g",
    "TotalSugar": "22 g",
    "TotalFat": "13 g",
    "Calcium": "477 mg",
    "Sodium": "6085 mg"
  }, {
    "Category": "Sour Cream",
    "SKU": 25182,
    "Name": "Cheddar Sour Cream",
    "Description": "A blend of sharp cheddar and tangy sour cream accented with garlic and onion.",
    "Calories": "396 kcal",
    "Protein": "14 g",
    "TotalCarbohydrates": "50 g",
    "TotalSugar": "30 g",
    "TotalFat": "17 g",
    "Calcium": "429 mg",
    "Sodium": "4778 mg"
  }, {
    "Category": 'Sour Cream',
    "SKU": 25338,
    "Name": "Aged Cheddar and Sour Cream",
    "Description": "An aged cheddar and tangy sour cream blend accented with garlic and onion.",
    "Calories": "400 kcal",
    "Protein": "13 g",
    "TotalCarbohydrates": "49 g",
    "TotalSugar": "32 g",
    "TotalFat": "19 g",
    "Calcium": "556 mg",
    "Sodium": "4550 mg"
  }, {
    "Category": 'Sour Cream',
    "SKU": 25169,
    "Name": "Sour Cream and Onion",
    "Description": "A rich, cultured flavor of sour cream with a light onion flavor.",
    "Calories": "343 kcal",
    "Protein": "13 g",
    "TotalCarbohydrates": "62 g",
    "TotalSugar": "37 g",
    "TotalFat": "5 g",
    "Calcium": "538 mg",
    "Sodium": "4902 mg"
  }];
});
define('lol-taste-test/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancel-all', 'cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('lol-taste-test/helpers/ember-power-select-build-selection', ['exports', 'ember-power-select/helpers/ember-power-select-build-selection'], function (exports, _emberPowerSelectHelpersEmberPowerSelectBuildSelection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectBuildSelection', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection.emberPowerSelectBuildSelection;
    }
  });
});
define('lol-taste-test/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('lol-taste-test/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', 'perform', args);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('lol-taste-test/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('lol-taste-test/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('lol-taste-test/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('lol-taste-test/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('lol-taste-test/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('lol-taste-test/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    screen: 'test-results',
    sample: 'a',
    closure: _ember['default'].computed(function () {
      return this.actions.showFact;
    }),

    actions: {
      showFact: function showFact() {
        var sample = this.get('sample');
        this.set('screen', 'test-fact');
        if (sample === 'a') {
          this.set('closure', this.actions.showB);
        } else if (sample === 'b') {
          this.set('closure', this.actions.showCall);
        } else {
          this.set('closure', this.actions.showA);
        }
      },
      showA: function showA() {
        this.set('screen', 'test-results');
        this.set('sample', 'a');
        this.set('closure', this.actions.showFact);
      },
      showB: function showB() {
        this.set('screen', 'test-results');
        this.set('sample', 'b');
        this.set('closure', this.actions.showFact);
      },
      showCall: function showCall() {
        this.set('screen', 'test-call');
        this.set('sample', null);
        this.set('closure', this.actions.showFact);
      }
    }
  });
});
define('lol-taste-test/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('sample');
    },

    actions: {
      refresh: function refresh() {
        this.refresh();
      }
    }
  });
});
define("lol-taste-test/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "lol-taste-test/index/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", [["get", "screen", ["loc", [null, [4, 17], [4, 23]]]]], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [4, 30], [4, 35]]]]], [], []], "sample", ["subexpr", "@mut", [["get", "sample", ["loc", [null, [4, 43], [4, 49]]]]], [], []], "transition", ["subexpr", "action", [["get", "closure", ["loc", [null, [4, 69], [4, 76]]]]], [], ["loc", [null, [4, 61], [4, 77]]]], "refresh", ["subexpr", "route-action", ["refresh"], [], ["loc", [null, [4, 86], [4, 110]]]]], ["loc", [null, [4, 4], [4, 112]]]]],
        locals: ["screen"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container test-results");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/logo_small.png");
        dom.setAttribute(el2, "alt", "");
        dom.setAttribute(el2, "class", "lower-logo");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "liquid-bind", [["get", "screen", ["loc", [null, [3, 17], [3, 23]]]]], ["class", "results-animations", "use", "toRight", "enableGrowth", false], 0, null, ["loc", [null, [3, 2], [5, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/index", ["exports", "ember-countries"], function (exports, _emberCountries) {
  Object.defineProperty(exports, "countries", {
    enumerable: true,
    get: function get() {
      return _emberCountries.countries;
    }
  });
  Object.defineProperty(exports, "countriesWithoutZip", {
    enumerable: true,
    get: function get() {
      return _emberCountries.countriesWithoutZip;
    }
  });
  Object.defineProperty(exports, "countriesWithState", {
    enumerable: true,
    get: function get() {
      return _emberCountries.countriesWithState;
    }
  });
  Object.defineProperty(exports, "countryIsoToValue", {
    enumerable: true,
    get: function get() {
      return _emberCountries.countryIsoToValue;
    }
  });
  Object.defineProperty(exports, "isCountryWithState", {
    enumerable: true,
    get: function get() {
      return _emberCountries.isCountryWithState;
    }
  });
  Object.defineProperty(exports, "isCountryWithoutZip", {
    enumerable: true,
    get: function get() {
      return _emberCountries.isCountryWithoutZip;
    }
  });
});
define('lol-taste-test/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('lol-taste-test/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'lol-taste-test/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _lolTasteTestConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_lolTasteTestConfigEnvironment['default'].APP.name, _lolTasteTestConfigEnvironment['default'].APP.version)
  };
});
define('lol-taste-test/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('lol-taste-test/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('lol-taste-test/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('lol-taste-test/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define("lol-taste-test/initializers/ember-i18n", ["exports", "lol-taste-test/instance-initializers/ember-i18n"], function (exports, _lolTasteTestInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _lolTasteTestInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _lolTasteTestInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('lol-taste-test/initializers/export-application-global', ['exports', 'ember', 'lol-taste-test/config/environment'], function (exports, _ember, _lolTasteTestConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_lolTasteTestConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _lolTasteTestConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_lolTasteTestConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('lol-taste-test/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("lol-taste-test/initializers/liquid-fire", ["exports", "liquid-fire/router-dsl-ext", "liquid-fire/ember-internals"], function (exports, _liquidFireRouterDslExt, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('lol-taste-test/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('lol-taste-test/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('lol-taste-test/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("lol-taste-test/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("lol-taste-test/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "lol-taste-test/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _lolTasteTestConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
define("lol-taste-test/locales/en/translations", ["exports"], function (exports) {
  exports["default"] = {
    tasteTitle: "Which of these samples do you personally like best?",
    colorTitle: "Which of the two samples do you think was produced without FD&C colors?",
    response: {
      wrong: "Sorry! That was incorrect.",
      correct: "CONGRATULATIONS! You identifed the sample with no FD&amp;C colors!",
      thanks: " Thank You for participating in our Taste Test Challenge!"
    }
  };
});
define("lol-taste-test/locales/es/translations", ["exports"], function (exports) {
  exports["default"] = {
    tasteTitle: "Which of theseo sampleso do you personally likeo besto?",
    colorTitle: "Whicho of the two sampleso do you thinko was producedo withouto FD&C colors?",
    response: {
      wrong: "Sorry! Thato was incorrecto.",
      correct: "Areeba! You identifedo the sampleo with no FD&amp;C colorso!",
      thanks: " Thank You for participatingo in our Tasteo Testo Challengeo!"
    }
  };
});
define('lol-taste-test/mixins/text-image', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    imagePath: _ember['default'].computed('image', 'i18n.locale', function () {
      var image = this.get('image');
      var locale = this.get('i18n.locale');
      return 'assets/images/' + locale + '/' + image + '.png';
    })
  });
});
define('lol-taste-test/models/flavor', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    number: _emberData['default'].attr(),
    size: _emberData['default'].attr()
  });
});
define('lol-taste-test/models/sample', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    tasteA: _emberData['default'].attr('boolean'),
    tasteB: _emberData['default'].attr('boolean'),
    colorA: _emberData['default'].attr('boolean'),
    colorB: _emberData['default'].attr('boolean')
  });
});
define('lol-taste-test/models/signup', ['exports', 'ember-data', 'ember-validations'], function (exports, _emberData, _emberValidations) {
  exports['default'] = _emberData['default'].Model.extend(_emberValidations['default'], {
    validations: {
      name: {
        presence: true

      },
      company: {
        presence: true

      },
      title: {
        presence: true

      },
      email: {
        presence: true

      },
      phone: {
        presence: true

      },
      address: {
        presence: true

      },
      city: {
        presence: true

      },
      zip: {
        presence: true

      },
      state: {
        presence: {
          'if': function _if(object, validator) {
            var country = object.get('country');
            return country === 'US' || country === 'CA';
          }
        }
      }
    },

    name: _emberData['default'].attr(),
    title: _emberData['default'].attr(),
    email: _emberData['default'].attr(),
    phone: _emberData['default'].attr(),
    company: _emberData['default'].attr(),
    address: _emberData['default'].attr(),
    city: _emberData['default'].attr(),
    zip: _emberData['default'].attr(),
    country: _emberData['default'].attr(),
    state: _emberData['default'].attr(),
    flavors: _emberData['default'].hasMany('flavor', { async: false })
  });
});
define('lol-taste-test/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('lol-taste-test/router', ['exports', 'ember', 'lol-taste-test/config/environment'], function (exports, _ember, _lolTasteTestConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _lolTasteTestConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('sample');
    this.route('signup');
    this.route('signup-screensaver');
  });

  exports['default'] = Router;
});
define('lol-taste-test/sample/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    i18n: _ember['default'].inject.service(),

    tasteAnswered: _ember['default'].computed.or('model.tasteA', 'model.tasteB'),
    colorAnswered: _ember['default'].computed.or('model.colorA', 'model.colorB'),

    showLanguage: _ember['default'].computed('tasteAnswered', 'colorAnswered', 'model.language', function () {
      return !!(!this.get('tasteAnswered') && !this.get('colorAnswered') && !this.get('model.language'));
    }),

    showTaste: _ember['default'].computed('showLanguage', 'tasteAnswered', function () {
      return !!(!this.get('showLanguage') && !this.get('tasteAnswered'));
    }),

    showColor: _ember['default'].computed('showLanguage', 'showResults', 'tasteAnswered', function () {
      return !!(!this.get('showLanguage') && !this.get('showResults') && this.get('tasteAnswered'));
    }),
    showResults: _ember['default'].computed('tasteAnswered', 'colorAnswered', function () {
      return !!(this.get('tasteAnswered') && this.get('colorAnswered'));
    }),

    actions: {
      chooseLanguage: function chooseLanguage(language) {
        this.set('model.language', language);
        this.set('i18n.locale', language);
      },
      chooseTaste: function chooseTaste(sample, choice) {
        sample.set('taste' + choice, true);
      },

      chooseColor: function chooseColor(sample, choice) {
        sample.set('color' + choice, true);
        sample.save().then(function () {
          _ember['default'].Logger.info('Successfully Submitted');
        });
      }

    }
  });
});
define('lol-taste-test/sample/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    i18n: _ember['default'].inject.service(),

    model: function model() {
      return this.store.createRecord('sample', { language: 'en' });
    },

    actions: {
      resetTest: function resetTest() {
        this.set('i18n.locale', 'en');
        this.store.unloadAll('sample');
        this.refresh();
      }
    }
  });
});
define("lol-taste-test/sample/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "lol-taste-test/sample/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "test-language", [], ["choice", ["subexpr", "action", ["chooseLanguage"], [], ["loc", [null, [3, 28], [3, 53]]]]], ["loc", [null, [3, 4], [3, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 4
              }
            },
            "moduleName": "lol-taste-test/sample/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "taste-test", [], ["sample", ["subexpr", "@mut", [["get", "model", ["loc", [null, [7, 27], [7, 32]]]]], [], []], "choice", ["subexpr", "action", ["chooseTaste", ["get", "model", ["loc", [null, [7, 62], [7, 67]]]]], [], ["loc", [null, [7, 40], [7, 68]]]]], ["loc", [null, [7, 6], [7, 71]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 6
                },
                "end": {
                  "line": 11,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/sample/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "color-test", [], ["sample", ["subexpr", "@mut", [["get", "model", ["loc", [null, [10, 31], [10, 36]]]]], [], []], "choice", ["subexpr", "action", ["chooseColor", ["get", "model", ["loc", [null, [10, 66], [10, 71]]]]], [], ["loc", [null, [10, 44], [10, 72]]]]], ["loc", [null, [10, 10], [10, 75]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 13,
                    "column": 8
                  },
                  "end": {
                    "line": 15,
                    "column": 8
                  }
                },
                "moduleName": "lol-taste-test/sample/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "test-response", [], ["sample", ["subexpr", "@mut", [["get", "model", ["loc", [null, [14, 34], [14, 39]]]]], [], []], "reset", ["subexpr", "route-action", ["resetTest"], [], ["loc", [null, [14, 46], [14, 72]]]]], ["loc", [null, [14, 10], [14, 74]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 6
                },
                "end": {
                  "line": 16,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/sample/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "liquid-if", [["get", "showResults", ["loc", [null, [13, 21], [13, 32]]]]], ["class", "test-animation response", "enableGrowth", false], 0, null, ["loc", [null, [13, 8], [15, 22]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 17,
                "column": 4
              }
            },
            "moduleName": "lol-taste-test/sample/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-if", [["get", "showColor", ["loc", [null, [9, 19], [9, 28]]]]], ["class", "test-animation color", "enableGrowth", false], 0, 1, ["loc", [null, [9, 6], [16, 20]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "lol-taste-test/sample/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "liquid-if", [["get", "showTaste", ["loc", [null, [6, 17], [6, 26]]]]], ["class", "test-animation taste", "enableGrowth", false], 0, 1, ["loc", [null, [6, 4], [17, 18]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/sample/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container sample");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/images/logo_small.png");
        dom.setAttribute(el2, "alt", "");
        dom.setAttribute(el2, "class", "lower-logo");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "liquid-if", [["get", "showLanguage", ["loc", [null, [2, 15], [2, 27]]]]], ["class", "test-animation language", "enableGrowth", false], 0, 1, ["loc", [null, [2, 2], [20, 16]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('lol-taste-test/serializers/signup', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      flavors: { embedded: 'always' }
    }
  });
});
define('lol-taste-test/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('lol-taste-test/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define("lol-taste-test/services/liquid-fire-modals", ["exports", "liquid-fire/modals"], function (exports, _liquidFireModals) {
  exports["default"] = _liquidFireModals["default"];
});
define("lol-taste-test/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('lol-taste-test/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define('lol-taste-test/services/validations', ['exports', 'ember'], function (exports, _ember) {

  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});
define('lol-taste-test/signup/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    ajax: _ember['default'].inject.service(),

    showForm: true,
    showFlavors: false,

    _toggleElements: function _toggleElements() {
      this.toggleProperty('showForm');
      this.toggleProperty('showFlavors');
    },

    _closeModal: function _closeModal() {
      this.set('submitModalOpen', false);
      _ember['default'].$(document).trigger('activity.idle');
    },

    _focusScanInput: function _focusScanInput() {
      _ember['default'].$('.badge-scan-input').focus();
      _ember['default'].$('.badge-scan-input').select();
    },

    _fillInModel: function _fillInModel(LeadInfo) {
      var model = this.get('model');
      model.setProperties({
        name: LeadInfo.FirstName + ' ' + LeadInfo.LastName,
        title: LeadInfo.Title,
        email: LeadInfo.Email,
        phone: LeadInfo.Phone + ' ' + LeadInfo.PhoneExtension,
        company: LeadInfo.Company,
        address: LeadInfo.Address + ' ' + LeadInfo.Address2 + ' ' + LeadInfo.Address3,
        city: LeadInfo.City,
        zip: LeadInfo.ZipCode,
        state: LeadInfo.StateCode,
        country: LeadInfo.CountryCode
      });
    },

    actions: {
      switchToFlavors: function switchToFlavors() {
        this._toggleElements();
      },

      switchToForm: function switchToForm() {
        this._toggleElements();
      },

      addFlavor: function addFlavor(flavor) {
        this.get('model.flavors').addObject(flavor);
      },

      removeFlavor: function removeFlavor(flavor) {
        this.get('model.flavors').removeObject(flavor);
      },

      save: function save(signup) {
        var _this = this;

        signup.save().then(function () {
          _this._toggleElements();
          _this.store.unloadAll();
          _this.send('refreshRoute');
          _this.set('submitMessage', "Thank you, Please check out our presentation times.");
          _this.set('submitModalOpen', true);
        })['catch'](function () {
          _this.set('submitMessage', "Sorry, somethign went wrong.  Check with an associate to complete your request, also please check out our presentation times.");
          _this.set('submitModalOpen', true);
        })['finally'](function () {
          _ember['default'].run.later(_this, _this._closeModal, 7000);
        });
      },

      openScanModal: function openScanModal() {
        this.set('scanModalOpen', true);
        this.set('scanValue', '');
        this.set('scanError', undefined);
        _ember['default'].run.later(this, this._focusScanInput, 500);
      },

      closeScanModal: function closeScanModal() {
        this.set('scanModalOpen', false);
      },

      submitScan: function submitScan(value) {
        var _this2 = this;

        this.set('scanValue', '');
        this.set('scanError', undefined);
        this.set('scanError', 'Badge scanned please wait...');
        this.get('ajax').request('/api/badgescan', {
          method: 'GET',
          data: { badgeid: value },
          contentType: 'text/plain'
        }).then(function (response) {
          if (response.Success) {
            _this2._fillInModel(response.LeadInfo);
          } else {
            throw new Error(response.Messages[0].Message);
          }
          _this2.set('scanModalOpen', false);
        })['catch'](function (reason) {
          _this2.set('scanError', reason);
        });
      }
    }
  });
});
define('lol-taste-test/signup/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('signup');
    },

    activate: function activate() {
      var _this = this;

      _ember['default'].$(document).on('activity.idle', function () {
        _this.transitionTo('signup-screensaver');
      });
    },

    deactivate: function deactivate() {
      _ember['default'].$(document).off('activity.idle');
    },

    setupController: function setupController(controller) {
      this._super.apply(this, arguments);

      controller.set('scanModalOpen', false);
      controller.set('submitModalOpen', false);

      _ember['default'].$(document).activity({
        delay: 45000
      });
    },

    actions: {
      refreshRoute: function refreshRoute() {
        this.store.unloadAll();
        this.refresh();
      }
    }
  });
});
define("lol-taste-test/signup/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "lol-taste-test/signup/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "signup-form", [], ["signup", ["subexpr", "@mut", [["get", "model", ["loc", [null, [20, 28], [20, 33]]]]], [], []], "next", ["subexpr", "action", ["switchToFlavors"], [], ["loc", [null, [20, 39], [20, 65]]]]], ["loc", [null, [20, 6], [20, 68]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 4
            },
            "end": {
              "line": 23,
              "column": 4
            }
          },
          "moduleName": "lol-taste-test/signup/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "signup-flavor-list", [], ["add", ["subexpr", "action", ["addFlavor"], [], ["loc", [null, [22, 32], [22, 52]]]], "remove", ["subexpr", "action", ["removeFlavor"], [], ["loc", [null, [22, 60], [22, 83]]]], "back", ["subexpr", "action", ["switchToForm"], [], ["loc", [null, [22, 89], [22, 112]]]], "save", ["subexpr", "action", ["save"], [], ["loc", [null, [22, 118], [22, 133]]]], "signup", ["subexpr", "@mut", [["get", "model", ["loc", [null, [22, 141], [22, 146]]]]], [], []]], ["loc", [null, [22, 6], [22, 148]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 2
              },
              "end": {
                "line": 34,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/signup/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "submit-message");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "submitMessage", ["loc", [null, [32, 6], [32, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/signup/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "modal-dialog", [], ["translucentOverlay", true], 0, null, ["loc", [null, [30, 2], [34, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 6
                },
                "end": {
                  "line": 47,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/signup/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "scanError", ["loc", [null, [46, 11], [46, 26]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 2
              },
              "end": {
                "line": 50,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/signup/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "modal-content");
            var el2 = dom.createTextNode("\n      Scan Your Badge Now\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            morphs[2] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["element", "action", [["subexpr", "action", ["closeScanModal"], [], ["loc", [null, [43, 41], [43, 66]]]]], [], ["loc", [null, [43, 31], [43, 69]]]], ["block", "if", [["get", "scanError", ["loc", [null, [45, 12], [45, 21]]]]], [], 0, null, ["loc", [null, [45, 6], [47, 13]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "scanValue", ["loc", [null, [48, 21], [48, 30]]]]], [], []], "enter", "submitScan", "class", "badge-scan-input"], ["loc", [null, [48, 6], [48, 76]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 0
            },
            "end": {
              "line": 51,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/signup/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tether-dialog", [], ["close", ["subexpr", "action", ["closeScanModal"], [], ["loc", [null, [39, 10], [39, 35]]]], "container-class", "badge-scan-modal", "translucent-overlay", true], 0, null, ["loc", [null, [38, 2], [50, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/signup/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container signup");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "logo-container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo_ingredients.png");
        dom.setAttribute(el3, "class", "logo");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "diagonal");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Request a Sample");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "instructions");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/sifted.jpg");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Explore the opportunities our dairy-based products can bring to your snack applications. Fill out the form below and select the spray-dried dairy powders and dry-blended seasonings you’d like to sample—and learn how our product development experts can team up with you to give your products a real dairy advantage.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("b");
        var el5 = dom.createElement("sup");
        var el6 = dom.createTextNode("*");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("PLEASE NOTE:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Land O’Lakes Ingredients is a business-to-business ingredient supplier for food manufacturers and does not work directly with consumers. All sample requests will be reviewed and qualified. ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("b");
        var el5 = dom.createTextNode("Samples will only be sent to U.S. food manufacturers.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-container draggable");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "badge-scan-button");
        var el3 = dom.createTextNode("To complete form by scanning your badge, tap here.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [13]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [11]), 1, 1);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "information-cutsheet", ["loc", [null, [3, 2], [3, 28]]]], ["block", "liquid-if", [["get", "showForm", ["loc", [null, [19, 17], [19, 25]]]]], ["class", "form-animation"], 0, 1, ["loc", [null, [19, 4], [23, 18]]]], ["element", "action", ["openScanModal"], [], ["loc", [null, [26, 36], [26, 64]]]], ["block", "if", [["get", "submitModalOpen", ["loc", [null, [29, 6], [29, 21]]]]], [], 2, null, ["loc", [null, [29, 0], [35, 7]]]], ["block", "if", [["get", "scanModalOpen", ["loc", [null, [37, 6], [37, 19]]]]], [], 3, null, ["loc", [null, [37, 0], [51, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('lol-taste-test/signup-screensaver/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("lol-taste-test/signup-screensaver/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/signup-screensaver/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "screensaver");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "assets/images/signup_screensaver.jpg");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/signup-screensaver/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["signup"], [], 0, null, ["loc", [null, [1, 0], [5, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lol-taste-test/templates/components/information-cutsheet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/information-cutsheet.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("embed");
            dom.setAttribute(el1, "src", "/pdf/information-cutsheet.pdf");
            dom.setAttribute(el1, "width", "100%");
            dom.setAttribute(el1, "height", "100%");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/information-cutsheet.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tether-dialog", [], ["translucentOverlay", true, "close", ["subexpr", "action", ["closeModal"], [], ["loc", [null, [6, 10], [6, 31]]]], "target", ".container", "targetAttachment", "middle center", "attachment", "middle center", "container-class", "specifications-modal"], 0, null, ["loc", [null, [4, 2], [14, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 7
          }
        },
        "moduleName": "lol-taste-test/templates/components/information-cutsheet.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "button");
        var el2 = dom.createTextNode("Full Product Specifications");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["element", "action", ["openModal"], [], ["loc", [null, [1, 23], [1, 47]]]], ["block", "if", [["get", "modalOpen", ["loc", [null, [3, 6], [3, 15]]]]], [], 0, null, ["loc", [null, [3, 0], [15, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lol-taste-test/templates/components/liquid-bind", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version", ["loc", [null, [6, 15], [6, 22]]]]], [], ["loc", [null, [6, 6], [6, 26]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "version", ["loc", [null, [8, 6], [8, 20]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [5, 11], [5, 19]]]]], [], 0, 1, ["loc", [null, [5, 4], [9, 12]]]]],
          locals: ["version"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [2, 28], [2, 39]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [2, 44], [2, 47]]]]], [], []], "outletName", ["subexpr", "@mut", [["get", "attrs.outletName", ["loc", [null, [3, 32], [3, 48]]]]], [], []], "name", "liquid-bind", "renderWhenFalse", true, "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [4, 67], [4, 72]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [11, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 6
                  }
                },
                "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["inline", "yield", [["get", "version", ["loc", [null, [26, 17], [26, 24]]]]], [], ["loc", [null, [26, 8], [26, 28]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 29,
                    "column": 6
                  }
                },
                "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "version", ["loc", [null, [28, 8], [28, 22]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [25, 13], [25, 21]]]]], [], 0, 1, ["loc", [null, [25, 6], [29, 14]]]]],
            locals: ["version"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [21, 30], [21, 41]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [21, 49], [21, 58]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [21, 63], [21, 66]]]]], [], []], "outletName", ["subexpr", "@mut", [["get", "attrs.outletName", ["loc", [null, [22, 34], [22, 50]]]]], [], []], "name", "liquid-bind", "renderWhenFalse", true], 0, null, ["loc", [null, [21, 4], [31, 26]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [14, 9], [14, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [15, 12], [15, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [16, 19], [16, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [17, 26], [17, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [18, 17], [18, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [19, 19], [19, 31]]]]], [], []]], 0, null, ["loc", [null, [13, 2], [32, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-bind.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [33, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("lol-taste-test/templates/components/liquid-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-container.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lol-taste-test/templates/components/liquid-if", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "yield", ["loc", [null, [5, 6], [5, 15]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [7, 6], [7, 28]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "valueVersion", ["loc", [null, [4, 10], [4, 22]]]]], [], 0, 1, ["loc", [null, [4, 4], [8, 11]]]]],
          locals: ["valueVersion"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "showFirstBlock", ["loc", [null, [2, 27], [2, 41]]]]], [], []], "name", ["subexpr", "@mut", [["get", "helperName", ["loc", [null, [2, 47], [2, 57]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [3, 27], [3, 30]]]]], [], []], "renderWhenFalse", ["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [3, 47], [3, 67]]]], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [3, 74], [3, 79]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [9, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "yield", ["loc", [null, [22, 8], [22, 17]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 23,
                    "column": 6
                  },
                  "end": {
                    "line": 25,
                    "column": 6
                  }
                },
                "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [24, 8], [24, 30]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 26,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "valueVersion", ["loc", [null, [21, 12], [21, 24]]]]], [], 0, 1, ["loc", [null, [21, 6], [25, 13]]]]],
            locals: ["valueVersion"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 27,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "showFirstBlock", ["loc", [null, [19, 29], [19, 43]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [19, 51], [19, 60]]]]], [], []], "name", ["subexpr", "@mut", [["get", "helperName", ["loc", [null, [19, 66], [19, 76]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [20, 8], [20, 11]]]]], [], []], "renderWhenFalse", ["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [20, 28], [20, 48]]]]], 0, null, ["loc", [null, [19, 4], [26, 24]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [12, 9], [12, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [13, 12], [13, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [14, 19], [14, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [15, 26], [15, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [16, 17], [16, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [17, 19], [17, 31]]]]], [], []]], 0, null, ["loc", [null, [11, 2], [27, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-if.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [28, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("lol-taste-test/templates/components/liquid-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "role", "dialog");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'aria-labelledby');
            morphs[2] = dom.createAttrMorph(element0, 'aria-label');
            morphs[3] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["lf-dialog ", ["get", "cc.options.dialogClass", ["loc", [null, [3, 28], [3, 50]]]]]]], ["attribute", "aria-labelledby", ["get", "cc.options.ariaLabelledBy", ["loc", [null, [3, 86], [3, 111]]]]], ["attribute", "aria-label", ["get", "cc.options.ariaLabel", ["loc", [null, [3, 127], [3, 147]]]]], ["inline", "lf-vue", [["get", "cc.view", ["loc", [null, [4, 15], [4, 22]]]]], ["dismiss", "dismiss"], ["loc", [null, [4, 6], [4, 42]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-modal.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "lm-container", [], ["action", "escape", "clickAway", "outsideClick"], 0, null, ["loc", [null, [2, 2], [6, 19]]]], ["content", "lf-overlay", ["loc", [null, [7, 2], [7, 16]]]]],
        locals: ["cc"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "liquid-versions", [], ["name", "liquid-modal", "value", ["subexpr", "@mut", [["get", "currentContext", ["loc", [null, [1, 45], [1, 59]]]]], [], []], "renderWhenFalse", false], 0, null, ["loc", [null, [1, 0], [8, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/templates/components/liquid-outlet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-outlet.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "outlet", [["get", "outletName", ["loc", [null, [16, 17], [16, 27]]]]], [], ["loc", [null, [16, 8], [16, 29]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-outlet.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "set-outlet-state", [["get", "outletName", ["loc", [null, [15, 26], [15, 36]]]], ["get", "version.outletState", ["loc", [null, [15, 37], [15, 56]]]]], [], 0, null, ["loc", [null, [15, 6], [17, 28]]]]],
          locals: ["version"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-outlet.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-bind", [["get", "outletState", ["loc", [null, [2, 17], [2, 28]]]]], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [3, 9], [3, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [4, 12], [4, 17]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [5, 10], [5, 13]]]]], [], []], "name", "liquid-outlet", "outletName", ["subexpr", "@mut", [["get", "outletName", ["loc", [null, [7, 17], [7, 27]]]]], [], []], "containerless", ["subexpr", "@mut", [["get", "containerless", ["loc", [null, [8, 20], [8, 33]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [9, 19], [9, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [10, 26], [10, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [11, 17], [11, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [12, 19], [12, 31]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [19, 20]]]]],
        locals: ["outletState"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-outlet.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "get-outlet-state", [["get", "outletName", ["loc", [null, [1, 21], [1, 31]]]]], [], 0, null, ["loc", [null, [1, 0], [20, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/templates/components/liquid-versions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-versions.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version.value", ["loc", [null, [4, 14], [4, 27]]]]], [], ["loc", [null, [4, 6], [4, 31]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-versions.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-child", [], ["version", ["subexpr", "@mut", [["get", "version", ["loc", [null, [3, 28], [3, 35]]]]], [], []], "liquidChildDidRender", "childDidRender", "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [3, 80], [3, 85]]]]], [], []]], 0, null, ["loc", [null, [3, 4], [5, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-versions.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "version.shouldRender", ["loc", [null, [2, 8], [2, 28]]]]], [], 0, null, ["loc", [null, [2, 2], [6, 9]]]]],
        locals: ["version"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-versions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "versions", ["loc", [null, [1, 8], [1, 16]]]]], ["key", "@identity"], 0, null, ["loc", [null, [1, 0], [7, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lol-taste-test/templates/components/liquid-with", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "version", ["loc", [null, [3, 13], [3, 20]]]]], [], ["loc", [null, [3, 4], [3, 24]]]]],
          locals: ["version"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [2, 28], [2, 39]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [2, 44], [2, 47]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [2, 53], [2, 57]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [2, 64], [2, 69]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version", ["loc", [null, [15, 15], [15, 22]]]]], [], ["loc", [null, [15, 6], [15, 26]]]]],
            locals: ["version"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [14, 30], [14, 41]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [14, 49], [14, 58]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [14, 63], [14, 66]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [14, 72], [14, 76]]]]], [], []]], 0, null, ["loc", [null, [14, 4], [16, 25]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [7, 9], [7, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [8, 12], [8, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [9, 19], [9, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [10, 26], [10, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [11, 17], [11, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [12, 19], [12, 31]]]]], [], []]], 0, null, ["loc", [null, [6, 2], [17, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/liquid-with.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('lol-taste-test/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("lol-taste-test/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "lol-taste-test/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "lol-taste-test/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('lol-taste-test/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("lol-taste-test/transitions/cross-fade", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = crossFade;

  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, opts), (0, _liquidFire.animate)(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET
});
// BEGIN-SNIPPET cross-fade-definition
define("lol-taste-test/transitions/default", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = defaultTransition;

  // This is what we run when no animation is asked for. It just sets
  // the newly-added element to visible (because we always start them
  // out invisible so that transitions can control their initial
  // appearance).

  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return _liquidFire.Promise.resolve();
  }
});
define("lol-taste-test/transitions/explode", ["exports", "ember", "liquid-fire"], function (exports, _ember, _liquidFire) {
  exports["default"] = explode;

  // Explode is not, by itself, an animation. It exists to pull apart
  // other elements so that each of the pieces can be targeted by
  // animations.

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return _liquidFire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = _ember["default"].copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return _liquidFire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece)["finally"](function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = _ember["default"].guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (_ember["default"].isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return _liquidFire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new _liquidFire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return _liquidFire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function (attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function (attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function (attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = _ember["default"].A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return _liquidFire.Promise.all(hits.map(function (elt) {
      var attrValue = _ember["default"].$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return _liquidFire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }
});
define('lol-taste-test/transitions/fade', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = fade;

  function fade() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = (0, _liquidFire.finish)(fadingElement, 'fade-out');
    } else {
      if ((0, _liquidFire.isAnimating)(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: (0, _liquidFire.timeSpent)(this.oldElement, 'fade-in') };
      }
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = (0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if ((0, _liquidFire.isAnimating)(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if ((0, _liquidFire.isAnimating)(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET
});
// BEGIN-SNIPPET fade-definition
define('lol-taste-test/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = flexGrow;

  function flexGrow(opts) {
    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { 'flex-grow': 0 }, opts), (0, _liquidFire.animate)(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }
});
define('lol-taste-test/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = flyTo;

  function flyTo() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this.newElement) {
      return _liquidFire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return _liquidFire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.newElement, motion, opts);
    } else {
      var motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.oldElement, motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }
});
define('lol-taste-test/transitions/move-over', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = moveOver;

  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if ((0, _liquidFire.isAnimating)(this.oldElement, 'moving-in')) {
      firstStep = (0, _liquidFire.finish)(this.oldElement, 'moving-in');
    } else {
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = _liquidFire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return _liquidFire.Promise.all([(0, _liquidFire.animate)(_this.oldElement, oldParams, opts), (0, _liquidFire.animate)(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }
});
define("lol-taste-test/transitions/scale", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = scale;

  function scale() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return (0, _liquidFire.animate)(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }
});
define("lol-taste-test/transitions/scroll-then", ["exports", "ember", "liquid-fire/is-browser"], function (exports, _ember, _liquidFireIsBrowser) {
  exports["default"] = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    if ((0, _liquidFireIsBrowser["default"])()) {
      _ember["default"].assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

      var el = document.getElementsByTagName('html');
      var nextTransition = this.lookup(nextTransitionName);
      if (!options) {
        options = {};
      }

      _ember["default"].assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === typeof options);

      // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
      options = _ember["default"].merge({ duration: 500, offset: 0 }, options);

      // additional args can be passed through after the scroll options object
      // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

      return window.$.Velocity(el, 'scroll', options).then(function () {
        nextTransition.apply(_this, rest);
      });
    }
  };
});
define("lol-taste-test/transitions/to-down", ["exports", "lol-taste-test/transitions/move-over"], function (exports, _lolTasteTestTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _lolTasteTestTransitionsMoveOver["default"].call(this, 'y', 1, opts);
  };
});
define("lol-taste-test/transitions/to-left", ["exports", "lol-taste-test/transitions/move-over"], function (exports, _lolTasteTestTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _lolTasteTestTransitionsMoveOver["default"].call(this, 'x', -1, opts);
  };
});
define("lol-taste-test/transitions/to-right", ["exports", "lol-taste-test/transitions/move-over"], function (exports, _lolTasteTestTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _lolTasteTestTransitionsMoveOver["default"].call(this, 'x', 1, opts);
  };
});
define("lol-taste-test/transitions/to-up", ["exports", "lol-taste-test/transitions/move-over"], function (exports, _lolTasteTestTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _lolTasteTestTransitionsMoveOver["default"].call(this, 'y', -1, opts);
  };
});
define('lol-taste-test/transitions/wait', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function (ms) {
    var _this = this;

    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return new _ember['default'].RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(_this.lookup(opts.then || 'default').call(_this));
      }, ms);
    });
  };
});
define('lol-taste-test/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.hasClass('test-animation'), this.fromValue(true), this.toValue(false), this.use('toRight', { duration: 500 }), this.reverse('toRight', { duration: 500 }), this.includingInitialRender());

    this.transition(this.hasClass('results-animation'), this.fromValue(false), this.toValue(true), this.use('toRight', { duration: 1000 }), this.reverse('toRight', { duration: 1000 }), this.includingInitialRender());

    this.transition(this.hasClass('flavor-animation'), this.toValue(true), this.use('toDown'), this.reverse('toUp'));

    this.transition(this.hasClass('form-animation'), this.toValue(false), this.use('toLeft'), this.reverse('toRight'));
  };
});
define('lol-taste-test/utils/countries-lists', ['exports', 'ember-countries/utils/countries-lists'], function (exports, _emberCountriesUtilsCountriesLists) {
  Object.defineProperty(exports, 'countries', {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountriesLists.countries;
    }
  });
  Object.defineProperty(exports, 'countriesWithoutZip', {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountriesLists.countriesWithoutZip;
    }
  });
  Object.defineProperty(exports, 'countriesWithState', {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountriesLists.countriesWithState;
    }
  });
});
define("lol-taste-test/utils/country-properties", ["exports", "ember-countries/utils/country-properties"], function (exports, _emberCountriesUtilsCountryProperties) {
  Object.defineProperty(exports, "countryIsoToValue", {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountryProperties.countryIsoToValue;
    }
  });
  Object.defineProperty(exports, "isCountryWithState", {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountryProperties.isCountryWithState;
    }
  });
  Object.defineProperty(exports, "isCountryWithoutZip", {
    enumerable: true,
    get: function get() {
      return _emberCountriesUtilsCountryProperties.isCountryWithoutZip;
    }
  });
});
define('lol-taste-test/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('lol-taste-test/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define("lol-taste-test/utils/provinces", ["exports"], function (exports) {
  exports["default"] = [{ "short": "AL", "name": "Alabama", "country": "US" }, { "short": "AK", "name": "Alaska", "country": "US" }, { "short": "AZ", "name": "Arizona", "country": "US" }, { "short": "AR", "name": "Arkansas", "country": "US" }, { "short": "CA", "name": "California", "country": "US" }, { "short": "CO", "name": "Colorado", "country": "US" }, { "short": "CT", "name": "Connecticut", "country": "US" }, { "short": "DC", "name": "District of Columbia", "country": "US" }, { "short": "DE", "name": "Delaware", "country": "US" }, { "short": "FL", "name": "Florida", "country": "US" }, { "short": "GA", "name": "Georgia", "country": "US" }, { "short": "HI", "name": "Hawaii", "country": "US" }, { "short": "ID", "name": "Idaho", "country": "US" }, { "short": "IL", "name": "Illinois", "country": "US" }, { "short": "IN", "name": "Indiana", "country": "US" }, { "short": "IA", "name": "Iowa", "country": "US" }, { "short": "KS", "name": "Kansas", "country": "US" }, { "short": "KY", "name": "Kentucky", "country": "US" }, { "short": "LA", "name": "Louisiana", "country": "US" }, { "short": "ME", "name": "Maine", "country": "US" }, { "short": "MD", "name": "Maryland", "country": "US" }, { "short": "MA", "name": "Massachusetts", "country": "US" }, { "short": "MI", "name": "Michigan", "country": "US" }, { "short": "MN", "name": "Minnesota", "country": "US" }, { "short": "MS", "name": "Mississippi", "country": "US" }, { "short": "MO", "name": "Missouri", "country": "US" }, { "short": "MT", "name": "Montana", "country": "US" }, { "short": "NE", "name": "Nebraska", "country": "US" }, { "short": "NV", "name": "Nevada", "country": "US" }, { "short": "NH", "name": "New Hampshire", "country": "US" }, { "short": "NJ", "name": "New Jersey", "country": "US" }, { "short": "NM", "name": "New Mexico", "country": "US" }, { "short": "NY", "name": "New York", "country": "US" }, { "short": "NC", "name": "North Carolina", "country": "US" }, { "short": "ND", "name": "North Dakota", "country": "US" }, { "short": "OH", "name": "Ohio", "country": "US" }, { "short": "OK", "name": "Oklahoma", "country": "US" }, { "short": "OR", "name": "Oregon", "country": "US" }, { "short": "PA", "name": "Pennsylvania", "country": "US" }, { "short": "RI", "name": "Rhode Island", "country": "US" }, { "short": "SC", "name": "South Carolina", "country": "US" }, { "short": "SD", "name": "South Dakota", "country": "US" }, { "short": "TN", "name": "Tennessee", "country": "US" }, { "short": "TX", "name": "Texas", "country": "US" }, { "short": "UT", "name": "Utah", "country": "US" }, { "short": "VT", "name": "Vermont", "country": "US" }, { "short": "VA", "name": "Virginia", "country": "US" }, { "short": "WA", "name": "Washington", "country": "US" }, { "short": "WV", "name": "West Virginia", "country": "US" }, { "short": "WI", "name": "Wisconsin", "country": "US" }, { "short": "WY", "name": "Wyoming", "country": "US" }, { "short": "AS", "name": "American Samoa", "country": "US" }, { "short": "GU", "name": "Guam", "country": "US" }, { "short": "MP", "name": "Northern Mariana Islands", "country": "US" }, { "short": "PR", "name": "Puerto Rico", "country": "US" }, { "short": "UM", "name": "United States Minor Outlying Islands", "country": "US" }, { "short": "VI", "name": "Virgin Islands", "country": "US" }, { "short": "AB", "name": "Alberta", "country": "CA" }, { "short": "BC", "name": "British Columbia", "country": "CA" }, { "short": "MB", "name": "Manitoba", "country": "CA" }, { "short": "NB", "name": "New Brunswick", "country": "CA" }, { "short": "NL", "name": "Newfoundland and Labrador", "country": "CA", "alt": ["Newfoundland", "Labrador"] }, { "short": "NS", "name": "Nova Scotia", "country": "CA" }, { "short": "NU", "name": "Nunavut", "country": "CA" }, { "short": "NW", "name": "Northwest Territories", "country": "CA" }, { "short": "ON", "name": "Ontario", "country": "CA" }, { "short": "PE", "name": "Prince Edward Island", "country": "CA" }, { "short": "QC", "name": "Quebec", "country": "CA" }, { "short": "SK", "name": "Saskatchewan", "country": "CA" }, { "short": "YU", "name": "Yukon", "country": "CA" }, { "name": "Ashmore and Cartier Islands", "country": "AU" }, { "name": "Australian Antarctic Territory", "country": "AU" }, { "short": "ACT", "name": "Australian Capital Territory", "country": "AU" }, { "short": "CX", "name": "Christmas Island", "country": "AU" }, { "short": "CC", "name": "Cocos Islands", "alt": ["Keeling Islands"], "country": "AU" }, { "name": "Coral Sea Islands", "country": "AU" }, { "short": "HM", "name": "Heard Island and McDonald Islands", "country": "AU" }, { "short": "JBT", "name": "Jervis Bay Territory", "country": "AU" }, { "short": "NSW", "name": "New South Wales", "country": "AU" }, { "short": "NF", "name": "Norfolk Island", "country": "AU" }, { "short": "NT", "name": "Northern Territory", "country": "AU" }, { "short": "QLD", "name": "Queensland", "country": "AU" }, { "short": "SA", "name": "South Australia", "country": "AU" }, { "short": "TAS", "name": "Tasmania", "country": "AU" }, { "short": "VIC", "name": "Victoria", "country": "AU" }, { "short": "WA", "name": "Western Australia", "country": "AU" }, { "name": "Aguascalientes", "short": "AG", "alt": ["AGS"], "country": "MX" }, { "name": "Baja California", "short": "BC", "alt": ["BCN"], "country": "MX" }, { "name": "Baja California Sur", "short": "BS", "alt": ["BCS"], "country": "MX" }, { "name": "Campeche", "short": "CM", "alt": ["Camp", "CAM"], "country": "MX" }, { "name": "Chiapas", "short": "CS", "alt": ["Chis", "CHP"], "country": "MX" }, { "name": "Chihuahua", "short": "CH", "alt": ["Chih", "CHH"], "country": "MX" }, { "name": "Coahuila", "short": "MX", "alt": ["Coah", "COA"], "country": "MX" }, { "name": "Colima", "short": "CL", "alt": ["COL"], "country": "MX" }, { "name": "Federal District", "short": "DF", "alt": ["DIF"], "country": "MX" }, { "name": "Durango", "short": "DG", "alt": ["Dgo", "DUR"], "country": "MX" }, { "name": "Guanajuato", "short": "GT", "alt": ["Gto", "GUA"], "country": "MX" }, { "name": "Guerrero", "short": "GR", "alt": ["Gro", "GRO"], "country": "MX" }, { "name": "Hidalgo", "short": "HG", "alt": ["Hgo", "HID"], "country": "MX" }, { "name": "Jalisco", "short": "JA", "alt": ["Jal", "JAL"], "country": "MX" }, { "name": "Mexico", "short": "ME", "alt": ["Edomex", "MEX"], "country": "MX" }, { "name": "Michoacán", "short": "MI", "alt": ["Mich", "MIC"], "country": "MX" }, { "name": "Morelos", "short": "MO", "alt": ["Mor", "MOR"], "country": "MX" }, { "name": "Nayarit", "short": "NA", "alt": ["Nay", "NAY"], "country": "MX" }, { "name": "Nuevo León", "short": "NL", "alt": ["NLE"], "country": "MX" }, { "name": "Oaxaca", "short": "OA", "alt": ["Oax", "OAX"], "country": "MX" }, { "name": "Puebla", "short": "PU", "alt": ["Pue", "PUE"], "country": "MX" }, { "name": "Querétaro", "short": "QE", "alt": ["Qro", "QUE"], "country": "MX" }, { "name": "Quintana Roo", "short": "QR", "alt": ["Q Roo", "ROO"], "country": "MX" }, { "name": "San Luis Potosí", "short": "SL", "alt": ["SLP"], "country": "MX" }, { "name": "Sinaloa", "short": "SI", "alt": ["SIN"], "country": "MX" }, { "name": "Sonora", "short": "SO", "alt": ["SON"], "country": "MX" }, { "name": "Tabasco", "short": "TB", "alt": ["TAB"], "country": "MX" }, { "name": "Tamaulipas", "short": "TM", "alt": ["Tamps", "TAM"], "country": "MX" }, { "name": "Tlaxcala", "short": "TL", "alt": ["Tlax", "TLA"], "country": "MX" }, { "name": "Veracruz", "short": "VE", "alt": ["VER"], "country": "MX" }, { "name": "Yucatán", "short": "YU", "alt": ["YUC"], "country": "MX" }, { "name": "Zacatecas", "short": "ZA", "alt": ["ZAC"], "country": "MX" }, { "name": "重庆", "short": "渝", "country": "CN" }, { "name": "黑龙江", "short": "黑", "country": "CN" }, { "name": "吉林", "short": "吉", "country": "CN" }, { "name": "海南", "short": "琼", "country": "CN" }, { "name": "北京", "short": "京", "country": "CN" }, { "name": "辽宁", "short": "辽", "country": "CN" }, { "name": "内蒙古", "short": "蒙", "country": "CN" }, { "name": "西藏", "short": "藏", "country": "CN" }, { "name": "青海", "short": "青", "country": "CN" }, { "name": "宁夏", "short": "宁", "country": "CN" }, { "name": "新疆", "short": "新", "country": "CN" }, { "name": "甘肃", "short": "甘", "country": "CN" }, { "name": "河北", "short": "冀", "country": "CN" }, { "name": "河南", "short": "豫", "country": "CN" }, { "name": "湖北", "short": "鄂", "country": "CN" }, { "name": "湖南", "short": "湘", "country": "CN" }, { "name": "山东", "short": "鲁", "country": "CN" }, { "name": "江苏", "short": "苏", "country": "CN" }, { "name": "安徽", "short": "皖", "country": "CN" }, { "name": "山西", "short": "晋", "country": "CN" }, { "name": "陕西", "short": "陕", "country": "CN" }, { "name": "四川", "short": "川", "country": "CN" }, { "name": "云南", "short": "滇", "country": "CN" }, { "name": "贵州", "short": "黔", "country": "CN" }, { "name": "浙江", "short": "浙", "country": "CN" }, { "name": "福建", "short": "闽", "country": "CN" }, { "name": "广西", "short": "桂", "country": "CN" }, { "name": "上海", "short": "沪", "country": "CN" }, { "name": "天津", "short": "津", "country": "CN" }, { "name": "香港", "short": "港", "country": "CN" }, { "name": "澳门", "short": "澳", "country": "CN" }, { "name": "台湾", "short": "台", "country": "CN" }, { "name": "江西", "short": "赣", "country": "CN" }, { "name": "广东", "short": "粤", "country": "CN" }, { "name": "Avon", "country": "GB", "region": "England" }, { "name": "Bedfordshire", "country": "GB", "region": "England" }, { "name": "Berkshire", "country": "GB", "region": "England" }, { "name": "Borders", "country": "GB", "region": "England" }, { "name": "Bristol", "country": "GB", "region": "England" }, { "name": "Buckinghamshire", "country": "GB", "region": "England" }, { "name": "Cambridgeshire", "country": "GB", "region": "England" }, { "name": "Channel Islands", "country": "GB", "region": "England" }, { "name": "Cheshire", "country": "GB", "region": "England" }, { "name": "Cleveland", "country": "GB", "region": "England" }, { "name": "Cornwall", "country": "GB", "region": "England" }, { "name": "Cumbria", "country": "GB", "region": "England" }, { "name": "Derbyshire", "country": "GB", "region": "England" }, { "name": "Devon", "country": "GB", "region": "England" }, { "name": "Dorset", "country": "GB", "region": "England" }, { "name": "Durham", "country": "GB", "region": "England" }, { "name": "East Riding of Yorkshire", "country": "GB", "region": "England" }, { "name": "East Sussex", "country": "GB", "region": "England" }, { "name": "Essex", "country": "GB", "region": "England" }, { "name": "Gloucestershire", "country": "GB", "region": "England" }, { "name": "Greater Manchester", "country": "GB", "region": "England" }, { "name": "Hampshire", "country": "GB", "region": "England" }, { "name": "Herefordshire", "country": "GB", "region": "England" }, { "name": "Hertfordshire", "country": "GB", "region": "England" }, { "name": "Humberside", "country": "GB", "region": "England" }, { "name": "Isle of Man", "country": "GB", "region": "England" }, { "name": "Isle of Wight", "country": "GB", "region": "England" }, { "name": "Isles of Scilly", "country": "GB", "region": "England" }, { "name": "Kent", "country": "GB", "region": "England" }, { "name": "Lancashire", "country": "GB", "region": "England" }, { "name": "Leicestershire", "country": "GB", "region": "England" }, { "name": "Lincolnshire", "country": "GB", "region": "England" }, { "name": "London", "country": "GB", "region": "England" }, { "name": "Merseyside", "country": "GB", "region": "England" }, { "name": "Middlesex", "country": "GB", "region": "England" }, { "name": "Norfolk", "country": "GB", "region": "England" }, { "name": "North Yorkshire", "country": "GB", "region": "England" }, { "name": "Northamptonshire", "country": "GB", "region": "England" }, { "name": "Northumberland", "country": "GB", "region": "England" }, { "name": "Nottinghamshire", "country": "GB", "region": "England" }, { "name": "Oxfordshire", "country": "GB", "region": "England" }, { "name": "Rutland", "country": "GB", "region": "England" }, { "name": "Shropshire", "country": "GB", "region": "England" }, { "name": "Somerset", "country": "GB", "region": "England" }, { "name": "South Yorkshire", "country": "GB", "region": "England" }, { "name": "Staffordshire", "country": "GB", "region": "England" }, { "name": "Suffolk", "country": "GB", "region": "England" }, { "name": "Surrey", "country": "GB", "region": "England" }, { "name": "Tyne and Wear", "country": "GB", "region": "England" }, { "name": "Warwickshire", "country": "GB", "region": "England" }, { "name": "West Midlands", "country": "GB", "region": "England" }, { "name": "West Sussex", "country": "GB", "region": "England" }, { "name": "West Yorkshire", "country": "GB", "region": "England" }, { "name": "Wiltshire", "country": "GB", "region": "England" }, { "name": "Worcestershire", "country": "GB", "region": "England" }, { "name": "Antrim", "country": "GB", "region": "Northern Ireland" }, { "name": "Down", "country": "GB", "region": "Northern Ireland" }, { "name": "Fermanagh", "country": "GB", "region": "Northern Ireland" }, { "name": "Londonderry", "country": "GB", "region": "Northern Ireland" }, { "name": "Tyrone", "country": "GB", "region": "Northern Ireland" }, { "name": "Aberdeen City", "country": "GB", "region": "Scotland" }, { "name": "Aberdeenshire", "country": "GB", "region": "Scotland" }, { "name": "Angus", "country": "GB", "region": "Scotland" }, { "name": "Argyll and Bute", "country": "GB", "region": "Scotland" }, { "name": "Armagh", "country": "GB", "region": "Scotland" }, { "name": "Carmarthenshire", "country": "GB", "region": "Scotland" }, { "name": "Clackmannan", "country": "GB", "region": "Scotland" }, { "name": "Dumfries and Galloway", "country": "GB", "region": "Scotland" }, { "name": "East Ayrshire", "country": "GB", "region": "Scotland" }, { "name": "East Dunbartonshire", "country": "GB", "region": "Scotland" }, { "name": "East Lothian", "country": "GB", "region": "Scotland" }, { "name": "East Renfrewshire", "country": "GB", "region": "Scotland" }, { "name": "Edinburgh City", "country": "GB", "region": "Scotland" }, { "name": "Falkirk", "country": "GB", "region": "Scotland" }, { "name": "Fife", "country": "GB", "region": "Scotland" }, { "name": "Glasgow", "country": "GB", "region": "Scotland" }, { "name": "Highland", "country": "GB", "region": "Scotland" }, { "name": "Inverclyde", "country": "GB", "region": "Scotland" }, { "name": "Midlothian", "country": "GB", "region": "Scotland" }, { "name": "Moray", "country": "GB", "region": "Scotland" }, { "name": "North Ayrshire", "country": "GB", "region": "Scotland" }, { "name": "North Lanarkshire", "country": "GB", "region": "Scotland" }, { "name": "Orkney", "country": "GB", "region": "Scotland" }, { "name": "Perthshire and Kinross", "country": "GB", "region": "Scotland" }, { "name": "Renfrewshire", "country": "GB", "region": "Scotland" }, { "name": "Roxburghshire", "country": "GB", "region": "Scotland" }, { "name": "Shetland", "country": "GB", "region": "Scotland" }, { "name": "South Ayrshire", "country": "GB", "region": "Scotland" }, { "name": "South Lanarkshire", "country": "GB", "region": "Scotland" }, { "name": "Stirling", "country": "GB", "region": "Scotland" }, { "name": "West Dunbartonshire", "country": "GB", "region": "Scotland" }, { "name": "West Lothian", "country": "GB", "region": "Scotland" }, { "name": "Western Isles", "country": "GB", "region": "Scotland" }, { "name": "Blaenau Gwent", "country": "GB", "region": "Wales" }, { "name": "Bridgend", "country": "GB", "region": "Wales" }, { "name": "Caerphilly", "country": "GB", "region": "Wales" }, { "name": "Cardiff", "country": "GB", "region": "Wales" }, { "name": "Ceredigion", "country": "GB", "region": "Wales" }, { "name": "Conwy", "country": "GB", "region": "Wales" }, { "name": "Denbighshire", "country": "GB", "region": "Wales" }, { "name": "Flintshire", "country": "GB", "region": "Wales" }, { "name": "Gwynedd", "country": "GB", "region": "Wales" }, { "name": "Isle of Anglesey", "country": "GB", "region": "Wales" }, { "name": "Merthyr Tydfil", "country": "GB", "region": "Wales" }, { "name": "Monmouthshire", "country": "GB", "region": "Wales" }, { "name": "Neath Port Talbot", "country": "GB", "region": "Wales" }, { "name": "Newport", "country": "GB", "region": "Wales" }, { "name": "Pembrokeshire", "country": "GB", "region": "Wales" }, { "name": "Powys", "country": "GB", "region": "Wales" }, { "name": "Rhondda Cynon Taff", "country": "GB", "region": "Wales" }, { "name": "Swansea", "country": "GB", "region": "Wales" }, { "name": "The Vale of Glamorgan", "country": "GB", "region": "Wales" }, { "name": "Torfaen", "country": "GB", "region": "Wales" }, { "name": "Wrexham", "country": "GB", "region": "Wales" }, { "short": "BW", "name": "Baden-Württemberg", "country": "DE" }, { "short": "BY", "name": "Bayern", "country": "DE" }, { "short": "BE", "name": "Berlin", "country": "DE" }, { "short": "BB", "name": "Brandenburg", "country": "DE" }, { "short": "HB", "name": "Bremen", "country": "DE" }, { "short": "HH", "name": "Hamburg", "country": "DE" }, { "short": "HE", "name": "Hessen", "country": "DE" }, { "short": "MV", "name": "Mecklenburg-Vorpommern", "country": "DE" }, { "short": "NI", "name": "Niedersachsen", "country": "DE" }, { "short": "NW", "name": "Nordrhein-Westfalen", "country": "DE" }, { "short": "RP", "name": "Rheinland-Pfalz", "country": "DE" }, { "short": "SL", "name": "Saarland", "country": "DE" }, { "short": "SN", "name": "Sachsen", "country": "DE" }, { "short": "ST", "name": "Sachsen-Anhalt", "country": "DE" }, { "short": "SH", "name": "Schleswig-Holstein", "country": "DE" }, { "short": "TH", "name": "Thüringen", "country": "DE" }, { "short": "DR", "name": "Drenthe", "country": "NL" }, { "short": "FL", "name": "Flevoland", "country": "NL" }, { "short": "FR", "name": "Friesland", "country": "NL" }, { "short": "GD", "name": "Gelderland", "country": "NL" }, { "short": "GR", "name": "Groningen", "country": "NL" }, { "short": "LB", "name": "Limburg", "country": "NL" }, { "short": "NB", "name": "Noord-Brabant", "country": "NL" }, { "short": "NH", "name": "Noord-Holland", "country": "NL" }, { "short": "OV", "name": "Overijssel", "country": "NL" }, { "short": "UT", "name": "Utrecht", "country": "NL" }, { "short": "ZH", "name": "Zuid-Holland", "country": "NL" }, { "short": "ZL", "name": "Zeeland", "country": "NL" }, { "short": "AW", "name": "Aruba", "country": "NL" }, { "short": "BQ", "name": "Bonaire", "country": "NL" }, { "short": "BQ2", "name": "Saba", "country": "NL" }, { "short": "BQ3", "name": "Sint Eustatius", "country": "NL" }, { "short": "CW", "name": "Curaçao", "country": "NL" }, { "short": "SX", "name": "Sint Maarten", "country": "NL" }, { "short": "ANT", "name": "Antwerpen", "country": "BE" }, { "short": "HAI", "name": "Henegouwen", "country": "BE", "alt": ["Hainaut"] }, { "short": "LIE", "name": "Luik", "country": "BE", "alt": ["Liège"] }, { "short": "LIM", "name": "Limburg", "country": "BE" }, { "short": "LUX", "name": "Luxemburg", "country": "BE" }, { "short": "NAM", "name": "Namen", "country": "BE" }, { "short": "OVL", "name": "Oost-Vlaanderen", "country": "BE" }, { "short": "VBR", "name": "Vlaams-Brabant", "country": "BE" }, { "short": "WBR", "name": "Waals-Brabant", "country": "BE" }, { "short": "WVL", "name": "West-Vlaanderen", "country": "BE" }, { "name": "Hovedstaden", "country": "DK" }, { "name": "Midtjylland", "country": "DK" }, { "name": "Nordjylland", "country": "DK" }, { "name": "Sjælland", "country": "DK" }, { "name": "Syddanmark", "country": "DK" }, { "name": "Adana", "country": "TR" }, { "name": "Adıyaman", "country": "TR" }, { "name": "Afyonkarahisar", "country": "TR" }, { "name": "Ağrı", "country": "TR" }, { "name": "Amasya", "country": "TR" }, { "name": "Ankara", "country": "TR" }, { "name": "Antalya", "country": "TR" }, { "name": "Artvin", "country": "TR" }, { "name": "Aydın", "country": "TR" }, { "name": "Balıkesir", "country": "TR" }, { "name": "Bilecik", "country": "TR" }, { "name": "Bingöl", "country": "TR" }, { "name": "Bitlis", "country": "TR" }, { "name": "Bolu", "country": "TR" }, { "name": "Burdur", "country": "TR" }, { "name": "Bursa", "country": "TR" }, { "name": "Çanakkale", "country": "TR" }, { "name": "Çankırı", "country": "TR" }, { "name": "Çorum", "country": "TR" }, { "name": "Denizli", "country": "TR" }, { "name": "Diyarbakır", "country": "TR" }, { "name": "Edirne", "country": "TR" }, { "name": "Elazığ", "country": "TR" }, { "name": "Erzincan", "country": "TR" }, { "name": "Erzurum", "country": "TR" }, { "name": "Eskişehir", "country": "TR" }, { "name": "Gaziantep", "country": "TR" }, { "name": "Giresun", "country": "TR" }, { "name": "Gümüşhane", "country": "TR" }, { "name": "Hakkâri", "country": "TR" }, { "name": "Hatay", "country": "TR" }, { "name": "Isparta", "country": "TR" }, { "name": "Mersin", "country": "TR" }, { "name": "Istanbul", "country": "TR" }, { "name": "İzmir", "country": "TR" }, { "name": "Kars", "country": "TR" }, { "name": "Kastamonu", "country": "TR" }, { "name": "Kayseri", "country": "TR" }, { "name": "Kırklareli", "country": "TR" }, { "name": "Kırşehir", "country": "TR" }, { "name": "Kocaeli", "country": "TR" }, { "name": "Konya", "country": "TR" }, { "name": "Kütahya", "country": "TR" }, { "name": "Malatya", "country": "TR" }, { "name": "Manisa", "country": "TR" }, { "name": "Kahramanmaraş", "country": "TR" }, { "name": "Mardin", "country": "TR" }, { "name": "Muğla", "country": "TR" }, { "name": "Muş", "country": "TR" }, { "name": "Nevşehir", "country": "TR" }, { "name": "Niğde", "country": "TR" }, { "name": "Ordu", "country": "TR" }, { "name": "Rize", "country": "TR" }, { "name": "Sakarya", "country": "TR" }, { "name": "Samsun", "country": "TR" }, { "name": "Siirt", "country": "TR" }, { "name": "Sinop", "country": "TR" }, { "name": "Sivas", "country": "TR" }, { "name": "Tekirdağ", "country": "TR" }, { "name": "Tokat", "country": "TR" }, { "name": "Trabzon", "country": "TR" }, { "name": "Tunceli", "country": "TR" }, { "name": "Şanlıurfa", "country": "TR" }, { "name": "Uşak", "country": "TR" }, { "name": "Van", "country": "TR" }, { "name": "Yozgat", "country": "TR" }, { "name": "Zonguldak", "country": "TR" }, { "name": "Aksaray", "country": "TR" }, { "name": "Bayburt", "country": "TR" }, { "name": "Karaman", "country": "TR" }, { "name": "Kırıkkale", "country": "TR" }, { "name": "Batman", "country": "TR" }, { "name": "Şırnak", "country": "TR" }, { "name": "Bartın", "country": "TR" }, { "name": "Ardahan", "country": "TR" }, { "name": "Iğdır", "country": "TR" }, { "name": "Yalova", "country": "TR" }, { "name": "Karabük", "country": "TR" }, { "name": "Kilis", "country": "TR" }, { "name": "Osmaniye", "country": "TR" }, { "name": "Düzce", "country": "TR" }, { "short": "ID-AC", "name": "Special Region of Aceh", "country": "ID" }, { "short": "ID-BA", "name": "Bali", "country": "ID" }, { "short": "ID-BB", "name": "Bangka–Belitung Islands", "country": "ID" }, { "short": "ID-BT", "name": "Banten", "country": "ID" }, { "short": "ID-BE", "name": "Bengkulu", "country": "ID" }, { "short": "ID-JT", "name": "Central Java", "country": "ID" }, { "short": "ID-KT", "name": "Central Kalimantan", "country": "ID" }, { "short": "ID-ST", "name": "Central Sulawesi", "country": "ID" }, { "short": "ID-JI", "name": "East Java", "country": "ID" }, { "short": "ID-KI", "name": "East Kalimantan", "country": "ID" }, { "short": "ID-NT", "name": "East Nusa Tenggara", "country": "ID" }, { "short": "ID-GO", "name": "Gorontalo", "country": "ID" }, { "short": "ID-JK", "name": "Jakarta Special Capital Region", "country": "ID" }, { "short": "ID-JA", "name": "Jambi", "country": "ID" }, { "short": "ID-LA", "name": "Lampung", "country": "ID" }, { "short": "ID-MA", "name": "Maluku", "country": "ID" }, { "short": "ID-KU", "name": "North Kalimantan", "country": "ID" }, { "short": "ID-MU", "name": "North Maluku", "country": "ID" }, { "short": "ID-SA", "name": "North Sulawesi", "country": "ID" }, { "short": "ID-SU", "name": "North Sumatra", "country": "ID" }, { "short": "ID-PA", "name": "Special Region of Papua", "country": "ID" }, { "short": "ID-RI", "name": "Riau", "country": "ID" }, { "short": "ID-KR", "name": "Riau Islands", "country": "ID" }, { "short": "ID-SG", "name": "Southeast Sulawesi", "country": "ID" }, { "short": "ID-KS", "name": "South Kalimantan", "country": "ID" }, { "short": "ID-SN", "name": "South Sulawesi", "country": "ID" }, { "short": "ID-SS", "name": "South Sumatra", "country": "ID" }, { "short": "ID-JB", "name": "West Java", "country": "ID" }, { "short": "ID-KB", "name": "West Kalimantan", "country": "ID" }, { "short": "ID-NB", "name": "West Nusa Tenggara", "country": "ID" }, { "short": "ID-PB", "name": "Special Region of West Papua", "country": "ID" }, { "short": "ID-SR", "name": "West Sulawesi", "country": "ID" }, { "short": "ID-SB", "name": "West Sumatra", "country": "ID" }, { "short": "ID-YO", "name": "Special Region of Yogyakarta", "country": "ID" }, { "name": "Irbid", "country": "JO" }, { "name": "Ajloun", "country": "JO" }, { "name": "Jerash", "country": "JO" }, { "name": "Mafraq", "country": "JO" }, { "name": "Balqa", "country": "JO" }, { "name": "Amman", "country": "JO" }, { "name": "Zarqa", "country": "JO" }, { "name": "Madaba", "country": "JO" }, { "name": "Karak", "country": "JO" }, { "name": "Tafilah", "country": "JO" }, { "name": "Ma'an", "country": "JO" }, { "name": "Aqaba", "country": "JO" }, { "short": "AP", "name": "Andhra Pradesh", "country": "IN" }, { "short": "AR", "name": "Arunachal Pradesh", "country": "IN" }, { "short": "AS", "name": "Assam", "country": "IN" }, { "short": "BR", "name": "Bihar", "country": "IN" }, { "short": "CT", "name": "Chhattisgarh", "country": "IN" }, { "short": "GA", "name": "Goa", "country": "IN" }, { "short": "GJ", "name": "Gujarat", "country": "IN" }, { "short": "HR", "name": "Haryana", "country": "IN" }, { "short": "HP", "name": "Himachal Pradesh", "country": "IN" }, { "short": "JK", "name": "Jammu and Kashmir", "country": "IN" }, { "short": "JH", "name": "Jharkhand", "country": "IN" }, { "short": "KA", "name": "Karnataka", "country": "IN" }, { "short": "KL", "name": "Kerala", "country": "IN" }, { "short": "MP", "name": "Madhya Pradesh", "country": "IN" }, { "short": "MH", "name": "Maharashtra", "country": "IN" }, { "short": "MN", "name": "Manipur", "country": "IN" }, { "short": "ML", "name": "Meghalaya", "country": "IN" }, { "short": "MZ", "name": "Mizoram", "country": "IN" }, { "short": "NL", "name": "Nagaland", "country": "IN" }, { "short": "OR", "name": "Odisha", "country": "IN" }, { "short": "PB", "name": "Punjab", "country": "IN" }, { "short": "RJ", "name": "Rajasthan", "country": "IN" }, { "short": "SK", "name": "Sikkim", "country": "IN" }, { "short": "TN", "name": "Tamil Nadu", "country": "IN" }, { "short": "TG", "name": "Telangana", "country": "IN" }, { "short": "TR", "name": "Tripura", "country": "IN" }, { "short": "UP", "name": "Uttar Pradesh", "country": "IN" }, { "short": "UT", "name": "Uttarakhand", "country": "IN" }, { "short": "WB", "name": "West Bengal", "country": "IN" }, { "short": "AN", "name": "Andaman and Nicobar Islands", "country": "IN" }, { "short": "CH", "name": "Chandigarh", "country": "IN" }, { "short": "DN", "name": "Dadra and Nagar Haveli", "country": "IN" }, { "short": "DD", "name": "Daman and Diu", "country": "IN" }, { "short": "LD", "name": "Lakshadweep", "country": "IN" }, { "short": "DL", "name": "National Capital Territory of Delhi", "country": "IN" }, { "short": "PY", "name": "Puducherry", "country": "IN" }, { "name": "ភ្នំពេញ", "english": "Phnom Penh Municipality", "country": "KH" }, { "name": "បន្ទាយមានជ័យ", "english": "Banteay Meanchey", "country": "KH" }, { "name": "បាត់ដំបង", "english": "Battambang", "country": "KH" }, { "name": "កំពង់ចាម", "english": "Kampong Cham", "country": "KH" }, { "name": "កំពង់ឆ្នាំង", "english": "Kampong Chhnang", "country": "KH" }, { "name": "កំពង់ស្ពឺ", "english": "Kampong Speu", "country": "KH" }, { "name": "កំពង់ធំ", "english": "Kampong Thom", "country": "KH" }, { "name": "កំពត", "english": "Kampot", "country": "KH" }, { "name": "កណ្តាល", "english": "Kandal", "country": "KH" }, { "name": "កោះកុង", "english": "Koh Kong", "country": "KH" }, { "name": "កែប", "english": "Kep", "country": "KH" }, { "name": "ក្រចេះ", "english": "Kratié", "country": "KH" }, { "name": "មណ្ឌលគីរី", "english": "Mondulkiri", "country": "KH" }, { "name": "ឧត្តរមានជ័យ", "english": "Oddar Meanchey", "country": "KH" }, { "name": "បៃលិន", "english": "Pailin", "country": "KH" }, { "name": "ព្រះសីហនុ", "english": "Preah Sihanouk", "country": "KH" }, { "name": "ព្រះវិហារ", "english": "Preah Vihear", "country": "KH" }, { "name": "ពោធិ៍សាត់", "english": "Pursat", "country": "KH" }, { "name": "ព្រៃវែង", "english": "Prey Veng", "country": "KH" }, { "name": "រតនគីរី", "english": "Ratanakiri", "country": "KH" }, { "name": "សៀមរាប", "english": "Siem Reap", "country": "KH" }, { "name": "ស្ទឹងត្រែង", "english": "Stung Treng", "country": "KH" }, { "name": "ស្វាយរៀង", "english": "Svay Rieng", "country": "KH" }, { "name": "តាកែវ", "english": "Takéo", "country": "KH" }, { "name": "ត្បូងឃ្មុំ", "english": "Tbong Khmum", "country": "KH" }, { "name": "Addis Ababa", "country": "ET" }, { "name": "Afar Region", "country": "ET" }, { "name": "Amhara Region", "country": "ET" }, { "name": "Benishangul-Gumuz", "country": "ET" }, { "name": "Dire Dawa", "country": "ET" }, { "name": "Gambela", "country": "ET" }, { "name": "Harari", "country": "ET" }, { "name": "Oromia", "country": "ET" }, { "name": "Somali", "country": "ET" }, { "name": "Southern Nations, Nationalities, and Peoples' Region", "country": "ET" }, { "name": "Tigray Region", "country": "ET" }, { "name": "Chachapoyas", "region": "Amazonas", "country": "PE" }, { "name": "Bagua", "region": "Amazonas", "country": "PE" }, { "name": "Bongará", "region": "Amazonas", "country": "PE" }, { "name": "Condorcanqui", "region": "Amazonas", "country": "PE" }, { "name": "Luya", "region": "Amazonas", "country": "PE" }, { "name": "Rodríguez de Mendoza", "region": "Amazonas", "country": "PE" }, { "name": "Utcubamba", "region": "Amazonas", "country": "PE" }, { "name": "Huaraz", "region": "Ancash", "country": "PE" }, { "name": "Aija", "region": "Ancash", "country": "PE" }, { "name": "Antonio Raymondi", "region": "Ancash", "country": "PE" }, { "name": "Asunción", "region": "Ancash", "country": "PE" }, { "name": "Bolognesi", "region": "Ancash", "country": "PE" }, { "name": "Carhuaz", "region": "Ancash", "country": "PE" }, { "name": "Carlos Fermín Fitzcarrald", "region": "Ancash", "country": "PE" }, { "name": "Casma", "region": "Ancash", "country": "PE" }, { "name": "Corongo", "region": "Ancash", "country": "PE" }, { "name": "Huari", "region": "Ancash", "country": "PE" }, { "name": "Huarmey", "region": "Ancash", "country": "PE" }, { "name": "Huaylas", "region": "Ancash", "country": "PE" }, { "name": "Mariscal Luzuriaga", "region": "Ancash", "country": "PE" }, { "name": "Ocros", "region": "Ancash", "country": "PE" }, { "name": "Pallasca", "region": "Ancash", "country": "PE" }, { "name": "Pomabamba", "region": "Ancash", "country": "PE" }, { "name": "Recuay", "region": "Ancash", "country": "PE" }, { "name": "Santa", "region": "Ancash", "country": "PE" }, { "name": "Sihuas", "region": "Ancash", "country": "PE" }, { "name": "Yungay", "region": "Ancash", "country": "PE" }, { "name": "Abancay", "region": "Apurímac", "country": "PE" }, { "name": "Andahuaylas", "region": "Apurímac", "country": "PE" }, { "name": "Antabamba", "region": "Apurímac", "country": "PE" }, { "name": "Aymaraes", "region": "Apurímac", "country": "PE" }, { "name": "Cotabambas", "region": "Apurímac", "country": "PE" }, { "name": "Chincheros", "region": "Apurímac", "country": "PE" }, { "name": "Grau", "region": "Apurímac", "country": "PE" }, { "name": "Arequipa", "region": "Arequipa", "country": "PE" }, { "name": "Camaná", "region": "Arequipa", "country": "PE" }, { "name": "Caravelí", "region": "Arequipa", "country": "PE" }, { "name": "Castilla", "region": "Arequipa", "country": "PE" }, { "name": "Caylloma", "region": "Arequipa", "country": "PE" }, { "name": "Condesuyos", "region": "Arequipa", "country": "PE" }, { "name": "Islay", "region": "Arequipa", "country": "PE" }, { "name": "La Unión", "region": "Arequipa", "country": "PE" }, { "name": "Huamanga", "region": "Ayacucho", "country": "PE" }, { "name": "Cangallo", "region": "Ayacucho", "country": "PE" }, { "name": "Huanca Sancos", "region": "Ayacucho", "country": "PE" }, { "name": "Huanta", "region": "Ayacucho", "country": "PE" }, { "name": "La Mar", "region": "Ayacucho", "country": "PE" }, { "name": "Lucanas", "region": "Ayacucho", "country": "PE" }, { "name": "Parinacochas", "region": "Ayacucho", "country": "PE" }, { "name": "Páucar del Sara Sara", "region": "Ayacucho", "country": "PE" }, { "name": "Sucre", "region": "Ayacucho", "country": "PE" }, { "name": "Víctor Fajardo", "region": "Ayacucho", "country": "PE" }, { "name": "Vilcas Huamán", "region": "Ayacucho", "country": "PE" }, { "name": "Cajamarca", "region": "Cajamarca", "country": "PE" }, { "name": "Cajabamba", "region": "Cajamarca", "country": "PE" }, { "name": "Celendín", "region": "Cajamarca", "country": "PE" }, { "name": "Chota", "region": "Cajamarca", "country": "PE" }, { "name": "Contumazá", "region": "Cajamarca", "country": "PE" }, { "name": "Cutervo", "region": "Cajamarca", "country": "PE" }, { "name": "Hualgayoc", "region": "Cajamarca", "country": "PE" }, { "name": "Jaén", "region": "Cajamarca", "country": "PE" }, { "name": "San Ignacio", "region": "Cajamarca", "country": "PE" }, { "name": "San Marcos", "region": "Cajamarca", "country": "PE" }, { "name": "San Miguel", "region": "Cajamarca", "country": "PE" }, { "name": "San Pablo", "region": "Cajamarca", "country": "PE" }, { "name": "Santa Cruz", "region": "Cajamarca", "country": "PE" }, { "name": "Callao", "region": "Callao", "country": "PE" }, { "name": "Cusco", "region": "Cusco", "country": "PE" }, { "name": "Acomayo", "region": "Cusco", "country": "PE" }, { "name": "Anta", "region": "Cusco", "country": "PE" }, { "name": "Calca", "region": "Cusco", "country": "PE" }, { "name": "Canas", "region": "Cusco", "country": "PE" }, { "name": "Canchis", "region": "Cusco", "country": "PE" }, { "name": "Chumbivilcas", "region": "Cusco", "country": "PE" }, { "name": "Espinar", "region": "Cusco", "country": "PE" }, { "name": "La Convención", "region": "Cusco", "country": "PE" }, { "name": "Paruro", "region": "Cusco", "country": "PE" }, { "name": "Paucartambo", "region": "Cusco", "country": "PE" }, { "name": "Quispicanchi", "region": "Cusco", "country": "PE" }, { "name": "Urubamba", "region": "Cusco", "country": "PE" }, { "name": "Huancavelica", "region": "Huancavelica", "country": "PE" }, { "name": "Acobamba", "region": "Huancavelica", "country": "PE" }, { "name": "Angaraes", "region": "Huancavelica", "country": "PE" }, { "name": "Castrovirreyna", "region": "Huancavelica", "country": "PE" }, { "name": "Churcampa", "region": "Huancavelica", "country": "PE" }, { "name": "Huaytará", "region": "Huancavelica", "country": "PE" }, { "name": "Tayacaja", "region": "Huancavelica", "country": "PE" }, { "name": "Huánuco", "region": "Huánuco", "country": "PE" }, { "name": "Ambo", "region": "Huánuco", "country": "PE" }, { "name": "Dos de Mayo", "region": "Huánuco", "country": "PE" }, { "name": "Huacaybamba", "region": "Huánuco", "country": "PE" }, { "name": "Huamalíes", "region": "Huánuco", "country": "PE" }, { "name": "Leoncio Prado", "region": "Huánuco", "country": "PE" }, { "name": "Marañón", "region": "Huánuco", "country": "PE" }, { "name": "Pachitea", "region": "Huánuco", "country": "PE" }, { "name": "Puerto Inca", "region": "Huánuco", "country": "PE" }, { "name": "Lauricocha", "region": "Huánuco", "country": "PE" }, { "name": "Yarowilca", "region": "Huánuco", "country": "PE" }, { "name": "Ica", "region": "Ica", "country": "PE" }, { "name": "Chincha", "region": "Ica", "country": "PE" }, { "name": "Nazca", "region": "Ica", "country": "PE" }, { "name": "Palpa", "region": "Ica", "country": "PE" }, { "name": "Pisco", "region": "Ica", "country": "PE" }, { "name": "Huancayo", "region": "Junín", "country": "PE" }, { "name": "Concepción", "region": "Junín", "country": "PE" }, { "name": "Chanchamayo", "region": "Junín", "country": "PE" }, { "name": "Jauja", "region": "Junín", "country": "PE" }, { "name": "Junín", "region": "Junín", "country": "PE" }, { "name": "Satipo", "region": "Junín", "country": "PE" }, { "name": "Tarma", "region": "Junín", "country": "PE" }, { "name": "Yauli", "region": "Junín", "country": "PE" }, { "name": "Chupaca", "region": "Junín", "country": "PE" }, { "name": "Trujillo", "region": "La Libertad", "country": "PE" }, { "name": "Ascope", "region": "La Libertad", "country": "PE" }, { "name": "Bolívar", "region": "La Libertad", "country": "PE" }, { "name": "Chepén", "region": "La Libertad", "country": "PE" }, { "name": "Julcán", "region": "La Libertad", "country": "PE" }, { "name": "Otuzco", "region": "La Libertad", "country": "PE" }, { "name": "Pacasmayo", "region": "La Libertad", "country": "PE" }, { "name": "Pataz", "region": "La Libertad", "country": "PE" }, { "name": "Sánchez Carrión", "region": "La Libertad", "country": "PE" }, { "name": "Santiago de Chuco", "region": "La Libertad", "country": "PE" }, { "name": "Gran Chimú", "region": "La Libertad", "country": "PE" }, { "name": "Virú", "region": "La Libertad", "country": "PE" }, { "name": "Chiclayo", "region": "Lambayeque", "country": "PE" }, { "name": "Ferreñafe", "region": "Lambayeque", "country": "PE" }, { "name": "Lambayeque", "region": "Lambayeque", "country": "PE" }, { "name": "Lima", "region": "autonomous", "country": "PE" }, { "name": "Huaura", "region": "Lima", "country": "PE" }, { "name": "Barranca", "region": "Lima", "country": "PE" }, { "name": "Cajatambo", "region": "Lima", "country": "PE" }, { "name": "Canta", "region": "Lima", "country": "PE" }, { "name": "Cañete", "region": "Lima", "country": "PE" }, { "name": "Huaral", "region": "Lima", "country": "PE" }, { "name": "Huarochirí", "region": "Lima", "country": "PE" }, { "name": "Oyón", "region": "Lima", "country": "PE" }, { "name": "Yauyos", "region": "Lima", "country": "PE" }, { "name": "Maynas", "region": "Loreto", "country": "PE" }, { "name": "Alto Amazonas", "region": "Loreto", "country": "PE" }, { "name": "Loreto", "region": "Loreto", "country": "PE" }, { "name": "Mariscal Ramón Castilla", "region": "Loreto", "country": "PE" }, { "name": "Putumayo", "region": "Loreto", "country": "PE" }, { "name": "Requena", "region": "Loreto", "country": "PE" }, { "name": "Ucayali", "region": "Loreto", "country": "PE" }, { "name": "Datem del Marañón", "region": "Loreto", "country": "PE" }, { "name": "Tambopata", "region": "Madre de Dios", "country": "PE" }, { "name": "Manú", "region": "Madre de Dios", "country": "PE" }, { "name": "Tahuamanu", "region": "Madre de Dios", "country": "PE" }, { "name": "Mariscal Nieto", "region": "Moquegua", "country": "PE" }, { "name": "General Sánchez Cerro", "region": "Moquegua", "country": "PE" }, { "name": "Ilo", "region": "Moquegua", "country": "PE" }, { "name": "Pasco", "region": "Pasco", "country": "PE" }, { "name": "Daniel Alcídes Carrión", "region": "Pasco", "country": "PE" }, { "name": "Oxapampa", "region": "Pasco", "country": "PE" }, { "name": "Piura", "region": "Piura", "country": "PE" }, { "name": "Ayabaca", "region": "Piura", "country": "PE" }, { "name": "Huancabamba", "region": "Piura", "country": "PE" }, { "name": "Morropón", "region": "Piura", "country": "PE" }, { "name": "Paita", "region": "Piura", "country": "PE" }, { "name": "Sullana", "region": "Piura", "country": "PE" }, { "name": "Talara", "region": "Piura", "country": "PE" }, { "name": "Sechura", "region": "Piura", "country": "PE" }, { "name": "Puno", "region": "Puno", "country": "PE" }, { "name": "Azángaro", "region": "Puno", "country": "PE" }, { "name": "Carabaya", "region": "Puno", "country": "PE" }, { "name": "Chucuito", "region": "Puno", "country": "PE" }, { "name": "El Collao", "region": "Puno", "country": "PE" }, { "name": "Huancané", "region": "Puno", "country": "PE" }, { "name": "Lampa", "region": "Puno", "country": "PE" }, { "name": "Melgar", "region": "Puno", "country": "PE" }, { "name": "Moho", "region": "Puno", "country": "PE" }, { "name": "San Antonio de Putina", "region": "Puno", "country": "PE" }, { "name": "San Román", "region": "Puno", "country": "PE" }, { "name": "Sandia", "region": "Puno", "country": "PE" }, { "name": "Yunguyo", "region": "Puno", "country": "PE" }, { "name": "Moyobamba", "region": "San Martín", "country": "PE" }, { "name": "Bellavista", "region": "San Martín", "country": "PE" }, { "name": "El Dorado", "region": "San Martín", "country": "PE" }, { "name": "Huallaga", "region": "San Martín", "country": "PE" }, { "name": "Lamas", "region": "San Martín", "country": "PE" }, { "name": "Mariscal Cáceres", "region": "San Martín", "country": "PE" }, { "name": "Picota", "region": "San Martín", "country": "PE" }, { "name": "Rioja", "region": "San Martín", "country": "PE" }, { "name": "San Martín", "region": "San Martín", "country": "PE" }, { "name": "Tocache", "region": "San Martín", "country": "PE" }, { "name": "Tacna", "region": "Tacna", "country": "PE" }, { "name": "Candarave", "region": "Tacna", "country": "PE" }, { "name": "Jorge Basadre", "region": "Tacna", "country": "PE" }, { "name": "Tarata", "region": "Tacna", "country": "PE" }, { "name": "Tumbes", "region": "Tumbes", "country": "PE" }, { "name": "Contralmirante Villar", "region": "Tumbes", "country": "PE" }, { "name": "Zarumilla", "region": "Tumbes", "country": "PE" }, { "name": "Coronel Portillo", "region": "Ucayali", "country": "PE" }, { "name": "Atalaya", "region": "Ucayali", "country": "PE" }, { "name": "Padre Abad", "region": "Ucayali", "country": "PE" }, { "name": "Purús", "region": "Ucayali", "country": "PE" }, { "name": "Camagüey", "country": "CU" }, { "name": "Ciego de Ávila", "country": "CU" }, { "name": "Cienfuegos", "country": "CU" }, { "name": "Havana", "country": "CU" }, { "name": "Bayamo", "country": "CU" }, { "name": "Guantánamo", "country": "CU" }, { "name": "Holguín", "country": "CU" }, { "name": "Nueva Gerona", "country": "CU" }, { "name": "Artemisa", "country": "CU" }, { "name": "Las Tunas", "country": "CU" }, { "name": "Matanzas", "country": "CU" }, { "name": "San José de las Lajas", "country": "CU" }, { "name": "Pinar del Río", "country": "CU" }, { "name": "Sancti Spíritus", "country": "CU" }, { "name": "Santiago de Cuba", "country": "CU" }, { "name": "Santa Clara", "country": "CU" }, { "name": "Buenos Aires City", "country": "AR" }, { "name": "Buenos Aires", "country": "AR" }, { "name": "Catamarca", "country": "AR" }, { "name": "Chaco", "country": "AR" }, { "name": "Chubut", "country": "AR" }, { "name": "Córdoba", "country": "AR" }, { "name": "Corrientes", "country": "AR" }, { "name": "Entre Ríos", "country": "AR" }, { "name": "Formosa", "country": "AR" }, { "name": "Jujuy", "country": "AR" }, { "name": "La Pampa", "country": "AR" }, { "name": "La Rioja", "country": "AR" }, { "name": "Mendoza", "country": "AR" }, { "name": "Misiones", "country": "AR" }, { "name": "Neuquén", "country": "AR" }, { "name": "Río Negro", "country": "AR" }, { "name": "Salta", "country": "AR" }, { "name": "San Juan", "country": "AR" }, { "name": "San Luis", "country": "AR" }, { "name": "Santa Cruz", "country": "AR" }, { "name": "Santa Fe", "country": "AR" }, { "name": "Santiago del Estero", "country": "AR" }, { "name": "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "country": "AR" }, { "name": "Tucumán", "country": "AR" }, { "name": "Arica", "region": "XV Arica and Parinacota", "country": "CL" }, { "name": "Parinacota", "region": "XV Arica and Parinacota", "country": "CL" }, { "name": "Iquique", "region": "I Tarapacá", "country": "CL" }, { "name": "Tamarugal", "region": "I Tarapacá", "country": "CL" }, { "name": "Antofagasta", "region": "II Antofagasta", "country": "CL" }, { "name": "El Loa", "region": "II Antofagasta", "country": "CL" }, { "name": "Tocopilla", "region": "II Antofagasta", "country": "CL" }, { "name": "Copiapó", "region": "III Atacama", "country": "CL" }, { "name": "Huasco", "region": "III Atacama", "country": "CL" }, { "name": "Chañaral", "region": "III Atacama", "country": "CL" }, { "name": "Elqui", "region": "IV Coquimbo", "country": "CL" }, { "name": "Limarí", "region": "IV Coquimbo", "country": "CL" }, { "name": "Choapa", "region": "IV Coquimbo", "country": "CL" }, { "name": "Isla de Pascua", "region": "V Valparaíso", "country": "CL" }, { "name": "Los Andes", "region": "V Valparaíso", "country": "CL" }, { "name": "Marga Marga", "region": "V Valparaíso", "country": "CL" }, { "name": "Petorca", "region": "V Valparaíso", "country": "CL" }, { "name": "Quillota", "region": "V Valparaíso", "country": "CL" }, { "name": "San Antonio", "region": "V Valparaíso", "country": "CL" }, { "name": "San Felipe de Aconcagua", "region": "V Valparaíso", "country": "CL" }, { "name": "Valparaíso", "region": "V Valparaíso", "country": "CL" }, { "name": "Cachapoal", "region": "VI O'Higgins", "country": "CL" }, { "name": "Colchagua", "region": "VI O'Higgins", "country": "CL" }, { "name": "Cardenal Caro", "region": "VI O'Higgins", "country": "CL" }, { "name": "Talca", "region": "VII Maule", "country": "CL" }, { "name": "Linares", "region": "VII Maule", "country": "CL" }, { "name": "Curicó", "region": "VII Maule", "country": "CL" }, { "name": "Cauquenes", "region": "VII Maule", "country": "CL" }, { "name": "Concepción", "region": "VIII Biobío", "country": "CL" }, { "name": "Ñuble", "region": "VIII Biobío", "country": "CL" }, { "name": "Biobío", "region": "VIII Biobío", "country": "CL" }, { "name": "Arauco", "region": "VIII Biobío", "country": "CL" }, { "name": "Cautin", "region": "IX Araucanía", "country": "CL" }, { "name": "Malleco", "region": "IX Araucanía", "country": "CL" }, { "name": "Valdivia", "region": "XIV Los Ríos", "country": "CL" }, { "name": "Ranco", "region": "XIV Los Ríos", "country": "CL" }, { "name": "Llanquihue", "region": "X Los Lagos", "country": "CL" }, { "name": "Osorno", "region": "X Los Lagos", "country": "CL" }, { "name": "Chiloe", "region": "X Los Lagos", "country": "CL" }, { "name": "Palena", "region": "X Los Lagos", "country": "CL" }, { "name": "Coihaique", "region": "XI Aisén", "country": "CL" }, { "name": "Aisén", "region": "XI Aisén", "country": "CL" }, { "name": "General Carrera", "region": "XI Aisén", "country": "CL" }, { "name": "Capitan Prat", "region": "XI Aisén", "country": "CL" }, { "name": "Magallanes", "region": "XII Magallanes", "country": "CL" }, { "name": "Ultima Esperanza", "region": "XII Magallanes", "country": "CL" }, { "name": "Tierra del Fuego", "region": "XII Magallanes", "country": "CL" }, { "name": "Antártica Chilena", "region": "XII Magallanes", "country": "CL" }, { "name": "Santiago", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Cordillera", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Maipo", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Talagante", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Melipilla", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Chacabuco", "region": "RM Santiago Metropolitan", "country": "CL" }, { "name": "Cercado", "region": "Beni", "country": "BO" }, { "name": "Iténez", "region": "Beni", "country": "BO" }, { "name": "José Ballivián", "region": "Beni", "country": "BO" }, { "name": "Mamoré", "region": "Beni", "country": "BO" }, { "name": "Marbán", "region": "Beni", "country": "BO" }, { "name": "Moxos", "region": "Beni", "country": "BO" }, { "name": "Vaca Díez", "region": "Beni", "country": "BO" }, { "name": "Yacuma", "region": "Beni", "country": "BO" }, { "name": "Azurduy", "region": "Chuquisaca", "country": "BO" }, { "name": "Belisario Boeto", "region": "Chuquisaca", "country": "BO" }, { "name": "Hernando Siles", "region": "Chuquisaca", "country": "BO" }, { "name": "Jaime Zudáñez", "region": "Chuquisaca", "country": "BO" }, { "name": "Luis Calvo", "region": "Chuquisaca", "country": "BO" }, { "name": "Nor Cinti", "region": "Chuquisaca", "country": "BO" }, { "name": "Oropeza", "region": "Chuquisaca", "country": "BO" }, { "name": "Sud Cinti", "region": "Chuquisaca", "country": "BO" }, { "name": "Tomina", "region": "Chuquisaca", "country": "BO" }, { "name": "Yamparáez", "region": "Chuquisaca", "country": "BO" }, { "name": "Arani", "region": "Cochabamba", "country": "BO" }, { "name": "Arque", "region": "Cochabamba", "country": "BO" }, { "name": "Ayopaya", "region": "Cochabamba", "country": "BO" }, { "name": "Capinota", "region": "Cochabamba", "country": "BO" }, { "name": "Carrasco", "region": "Cochabamba", "country": "BO" }, { "name": "Cercado", "region": "Cochabamba", "country": "BO" }, { "name": "Chapare", "region": "Cochabamba", "country": "BO" }, { "name": "Esteban Arce", "region": "Cochabamba", "country": "BO" }, { "name": "Germán Jordán", "region": "Cochabamba", "country": "BO" }, { "name": "Mizque", "region": "Cochabamba", "country": "BO" }, { "name": "Campero", "region": "Cochabamba", "country": "BO" }, { "name": "Punata", "region": "Cochabamba", "country": "BO" }, { "name": "Quillacollo", "region": "Cochabamba", "country": "BO" }, { "name": "Bolívar", "region": "Cochabamba", "country": "BO" }, { "name": "Tapacarí", "region": "Cochabamba", "country": "BO" }, { "name": "Tiraque", "region": "Cochabamba", "country": "BO" }, { "name": "Abel Iturralde", "region": "La Paz", "country": "BO" }, { "name": "Aroma", "region": "La Paz", "country": "BO" }, { "name": "Bautista Saavedra", "region": "La Paz", "country": "BO" }, { "name": "Caranavi", "region": "La Paz", "country": "BO" }, { "name": "Eliodoro Camacho", "region": "La Paz", "country": "BO" }, { "name": "Franz Tamayo", "region": "La Paz", "country": "BO" }, { "name": "Gualberto Villarroel", "region": "La Paz", "country": "BO" }, { "name": "Ingavi", "region": "La Paz", "country": "BO" }, { "name": "Inquisivi", "region": "La Paz", "country": "BO" }, { "name": "José Manuel Pando", "region": "La Paz", "country": "BO" }, { "name": "Larecaja", "region": "La Paz", "country": "BO" }, { "name": "Loayza", "region": "La Paz", "country": "BO" }, { "name": "Los Andes", "region": "La Paz", "country": "BO" }, { "name": "Manco Kapac", "region": "La Paz", "country": "BO" }, { "name": "Muñecas", "region": "La Paz", "country": "BO" }, { "name": "Nor Yungas", "region": "La Paz", "country": "BO" }, { "name": "Omasuyos", "region": "La Paz", "country": "BO" }, { "name": "Pacajes", "region": "La Paz", "country": "BO" }, { "name": "Murillo", "region": "La Paz", "country": "BO" }, { "name": "Sud Yungas", "region": "La Paz", "country": "BO" }, { "name": "Atahuallpa", "region": "Oruro", "country": "BO" }, { "name": "Carangas", "region": "Oruro", "country": "BO" }, { "name": "Cercado", "region": "Oruro", "country": "BO" }, { "name": "Eduardo Avaroa", "region": "Oruro", "country": "BO" }, { "name": "Ladislao Cabrera", "region": "Oruro", "country": "BO" }, { "name": "Litoral", "region": "Oruro", "country": "BO" }, { "name": "Nor Carangas", "region": "Oruro", "country": "BO" }, { "name": "Pantaléon Dalence", "region": "Oruro", "country": "BO" }, { "name": "Poopó", "region": "Oruro", "country": "BO" }, { "name": "Puerto de Mejillones", "region": "Oruro", "country": "BO" }, { "name": "Sajama", "region": "Oruro", "country": "BO" }, { "name": "San Pedro de Totora", "region": "Oruro", "country": "BO" }, { "name": "Saucarí", "region": "Oruro", "country": "BO" }, { "name": "Sebastián Pagador", "region": "Oruro", "country": "BO" }, { "name": "Sud Carangas", "region": "Oruro", "country": "BO" }, { "name": "Tomas Barrón", "region": "Oruro", "country": "BO" }, { "name": "Abuná", "region": "Pando", "country": "BO" }, { "name": "Federico Román", "region": "Pando", "country": "BO" }, { "name": "Madre de Dios", "region": "Pando", "country": "BO" }, { "name": "Manuripi", "region": "Pando", "country": "BO" }, { "name": "Nicolás Suárez", "region": "Pando", "country": "BO" }, { "name": "Alonso de Ibáñez", "region": "Potosí", "country": "BO" }, { "name": "Antonio Quijarro", "region": "Potosí", "country": "BO" }, { "name": "Bernardino Bilbao", "region": "Potosí", "country": "BO" }, { "name": "Charcas", "region": "Potosí", "country": "BO" }, { "name": "Chayanta", "region": "Potosí", "country": "BO" }, { "name": "Cornelio Saavedra", "region": "Potosí", "country": "BO" }, { "name": "Daniel Campos", "region": "Potosí", "country": "BO" }, { "name": "Enrique Baldivieso", "region": "Potosí", "country": "BO" }, { "name": "José María Linares", "region": "Potosí", "country": "BO" }, { "name": "Modesto Omiste", "region": "Potosí", "country": "BO" }, { "name": "Nor Chichas", "region": "Potosí", "country": "BO" }, { "name": "Nor Lípez", "region": "Potosí", "country": "BO" }, { "name": "Rafael Bustillo", "region": "Potosí", "country": "BO" }, { "name": "Sur Chichas", "region": "Potosí", "country": "BO" }, { "name": "Sur Lípez", "region": "Potosí", "country": "BO" }, { "name": "Tomás Frías", "region": "Potosí", "country": "BO" }, { "name": "Andrés Ibáñez", "region": "Santa Cruz", "country": "BO" }, { "name": "Ángel Sandoval", "region": "Santa Cruz", "country": "BO" }, { "name": "Chiquitos", "region": "Santa Cruz", "country": "BO" }, { "name": "Cordillera", "region": "Santa Cruz", "country": "BO" }, { "name": "Florida", "region": "Santa Cruz", "country": "BO" }, { "name": "Germán Busch", "region": "Santa Cruz", "country": "BO" }, { "name": "Guarayos", "region": "Santa Cruz", "country": "BO" }, { "name": "Ichilo", "region": "Santa Cruz", "country": "BO" }, { "name": "Ignacio Warnes", "region": "Santa Cruz", "country": "BO" }, { "name": "José Miguel de Velasco", "region": "Santa Cruz", "country": "BO" }, { "name": "Manuel María Caballero", "region": "Santa Cruz", "country": "BO" }, { "name": "Ñuflo de Chávez", "region": "Santa Cruz", "country": "BO" }, { "name": "Obispo Santistevan", "region": "Santa Cruz", "country": "BO" }, { "name": "Sara", "region": "Santa Cruz", "country": "BO" }, { "name": "Vallegrande", "region": "Santa Cruz", "country": "BO" }, { "name": "Aniceto Arce", "region": "Tarija", "country": "BO" }, { "name": "Burnet O'Connor", "region": "Tarija", "country": "BO" }, { "name": "Cercado", "region": "Tarija", "country": "BO" }, { "name": "Eustaquio Méndez", "region": "Tarija", "country": "BO" }, { "name": "Gran Chaco", "region": "Tarija", "country": "BO" }, { "name": "José María Avilés", "region": "Tarija", "country": "BO" }, { "name": "বরগুনা", "english": "Barguna", "region": "Barisal", "country": "BD" }, { "name": "বরিশাল", "english": "Barisal", "region": "Barisal", "country": "BD" }, { "name": "ভোলা", "english": "Bhola", "region": "Barisal", "country": "BD" }, { "name": "ঝালকাঠি", "english": "Jhalokati", "region": "Barisal", "country": "BD" }, { "name": "পটুয়াখালী", "english": "Patuakhali", "region": "Barisal", "country": "BD" }, { "name": "পিরোজপুর", "english": "Pirojpur", "region": "Barisal", "country": "BD" }, { "name": "বান্দরবান", "english": "Bandarban", "region": "Chittagong", "country": "BD" }, { "name": "ব্রাহ্মণবাড়ীয়া", "english": "Brahmanbaria", "region": "Chittagong", "country": "BD" }, { "name": "চাঁদপুর", "english": "Chandpur", "region": "Chittagong", "country": "BD" }, { "name": "চট্টগ্রাম", "english": "Chittagong", "region": "Chittagong", "country": "BD" }, { "name": "কুমিল্লা", "english": "Comilla", "region": "Chittagong", "country": "BD" }, { "name": "কক্সবাজার", "english": "Cox's Bazar", "region": "Chittagong", "country": "BD" }, { "name": "ফেনী", "english": "Feni", "region": "Chittagong", "country": "BD" }, { "name": "খাগড়াছড়ি", "english": "Khagrachhari", "region": "Chittagong", "country": "BD" }, { "name": "লক্ষীপুর", "english": "Lakshmipur", "region": "Chittagong", "country": "BD" }, { "name": "নোয়াখালী", "english": "Noakhali", "region": "Chittagong", "country": "BD" }, { "name": "রাঙ্গামাটি", "english": "Rangamati", "region": "Chittagong", "country": "BD" }, { "name": "ঢাকা", "english": "Dhaka", "region": "Dhaka", "country": "BD" }, { "name": "ফরিদপুর", "english": "Faridpur", "region": "Dhaka", "country": "BD" }, { "name": "গাজীপুর", "english": "Gazipur", "region": "Dhaka", "country": "BD" }, { "name": "গোপালগঞ্জ", "english": "Gopalganj", "region": "Dhaka", "country": "BD" }, { "name": "জামালপুর", "english": "Jamalpur", "region": "Dhaka", "country": "BD" }, { "name": "কিশোরগঞ্জ", "english": "Kishoreganj", "region": "Dhaka", "country": "BD" }, { "name": "মাদারীপুর", "english": "Madaripur", "region": "Dhaka", "country": "BD" }, { "name": "মানিকগঞ্জ", "english": "Manikganj", "region": "Dhaka", "country": "BD" }, { "name": "মুন্সীগঞ্জ", "english": "Munshiganj", "region": "Dhaka", "country": "BD" }, { "name": "ময়মনসিংহ", "english": "Mymensingh", "region": "Dhaka", "country": "BD" }, { "name": "নারায়ণগঞ্জ", "english": "Narayanganj", "region": "Dhaka", "country": "BD" }, { "name": "নরসিংদী", "english": "Narsingdi", "region": "Dhaka", "country": "BD" }, { "name": "নেত্রকোনা", "english": "Netrakona", "region": "Dhaka", "country": "BD" }, { "name": "রাজবাড়ী", "english": "Rajbari", "region": "Dhaka", "country": "BD" }, { "name": "শরীয়তপুর", "english": "Shariatpur", "region": "Dhaka", "country": "BD" }, { "name": "শেরপুর", "english": "Sherpur", "region": "Dhaka", "country": "BD" }, { "name": "টাঙ্গাইল", "english": "Tangail", "region": "Dhaka", "country": "BD" }, { "name": "বাগেরহাট", "english": "Bagerhat", "region": "Khulna", "country": "BD" }, { "name": "চুয়াডাঙ্গা", "english": "Chuadanga", "region": "Khulna", "country": "BD" }, { "name": "যশোর", "english": "Jessore", "region": "Khulna", "country": "BD" }, { "name": "ঝিনাইদহ", "english": "Jhenaidah", "region": "Khulna", "country": "BD" }, { "name": "খুলনা", "english": "Khulna", "region": "Khulna", "country": "BD" }, { "name": "কুষ্টিয়া", "english": "Kushtia", "region": "Khulna", "country": "BD" }, { "name": "মাগুরা", "english": "Magura", "region": "Khulna", "country": "BD" }, { "name": "মেহেরপুর", "english": "Meherpur", "region": "Khulna", "country": "BD" }, { "name": "নড়াইল", "english": "Narail", "region": "Khulna", "country": "BD" }, { "name": "সাতক্ষিরা", "english": "Satkhira", "region": "Khulna", "country": "BD" }, { "name": "বগুড়া", "english": "Bogra", "region": "Rajshahi", "country": "BD" }, { "name": "জয়পুরহাট", "english": "Joypurhat", "region": "Rajshahi", "country": "BD" }, { "name": "নওগাঁ", "english": "Naogaon", "region": "Rajshahi", "country": "BD" }, { "name": "নাটোর", "english": "Natore", "region": "Rajshahi", "country": "BD" }, { "name": "নওয়াবগঞ্জ", "english": "Chapainawabganj", "region": "Rajshahi", "country": "BD" }, { "name": "পাবনা", "english": "Pabna", "region": "Rajshahi", "country": "BD" }, { "name": "রাজশাহী", "english": "Rajshahi", "region": "Rajshahi", "country": "BD" }, { "name": "সিরাজগঞ্জ", "english": "Sirajganj", "region": "Rajshahi", "country": "BD" }, { "name": "দিনাজপুর", "english": "Dinajpur", "region": "Rangpur", "country": "BD" }, { "name": "গাইবান্ধা", "english": "Gaibandha", "region": "Rangpur", "country": "BD" }, { "name": "কুড়িগ্রাম", "english": "Kurigram", "region": "Rangpur", "country": "BD" }, { "name": "লালমনিরহাট", "english": "Lalmonirhat", "region": "Rangpur", "country": "BD" }, { "name": "নীলফামারী", "english": "Nilphamari", "region": "Rangpur", "country": "BD" }, { "name": "পঞ্চগড়", "english": "Panchagarh", "region": "Rangpur", "country": "BD" }, { "name": "রংপুর", "english": "Rangpur", "region": "Rangpur", "country": "BD" }, { "name": "ঠাকুরগাঁ", "english": "Thakurgaon", "region": "Rangpur", "country": "BD" }, { "name": "হবিগঞ্জ", "english": "Habiganj", "region": "Sylhet", "country": "BD" }, { "name": "মৌলভীবাজার", "english": "Moulvibazar", "region": "Sylhet", "country": "BD" }, { "name": "সুনামগঞ্জ", "english": "Sunamganj", "region": "Sylhet", "country": "BD" }, { "name": "সিলেট", "english": "Sylhet", "region": "Sylhet", "country": "BD" }, { "name": "Azad Kashmir", "country": "PK" }, { "name": "Bahawalpur", "country": "PK" }, { "name": "Bannu", "country": "PK" }, { "name": "Dera Ghazi Khan", "country": "PK" }, { "name": "Dera Ismail Khan", "country": "PK" }, { "name": "Faisalabad", "country": "PK" }, { "name": "F.A.T.A.", "country": "PK" }, { "name": "Gujranwala", "country": "PK" }, { "name": "Hazara", "country": "PK" }, { "name": "Hyderabad", "country": "PK" }, { "name": "Islamabad", "country": "PK" }, { "name": "Kalat", "country": "PK" }, { "name": "Karachi", "country": "PK" }, { "name": "Kohat", "country": "PK" }, { "name": "Lahore", "country": "PK" }, { "name": "Larkana", "country": "PK" }, { "name": "Makran", "country": "PK" }, { "name": "Malakand", "country": "PK" }, { "name": "Mardan", "country": "PK" }, { "name": "Mirpur Khas", "country": "PK" }, { "name": "Multan", "country": "PK" }, { "name": "Nasirabad", "country": "PK" }, { "name": "Northern Areas", "country": "PK" }, { "name": "Peshawar", "country": "PK" }, { "name": "Quetta", "country": "PK" }, { "name": "Rawalpindi", "country": "PK" }, { "name": "Sargodha", "country": "PK" }, { "name": "Sahiwal", "country": "PK" }, { "name": "Sibi", "country": "PK" }, { "name": "Sukkur", "country": "PK" }, { "name": "Zhob", "country": "PK" }, { "name": "Anambra", "country": "NG" }, { "name": "Enugu", "country": "NG" }, { "name": "Akwa Ibom", "country": "NG" }, { "name": "Adamawa", "country": "NG" }, { "name": "Abia", "country": "NG" }, { "name": "Bauchi", "country": "NG" }, { "name": "Bayelsa", "country": "NG" }, { "name": "Benue", "country": "NG" }, { "name": "Borno", "country": "NG" }, { "name": "Cross River", "country": "NG" }, { "name": "Delta", "country": "NG" }, { "name": "Ebonyi", "country": "NG" }, { "name": "愛知県", "english": "Aichi", "country": "JP" }, { "name": "秋田県", "english": "Akita", "country": "JP" }, { "name": "青森県", "english": "Aomori", "country": "JP" }, { "name": "千葉県", "english": "Chiba", "country": "JP" }, { "name": "愛媛県", "english": "Ehime", "country": "JP" }, { "name": "福井県", "english": "Fukui", "country": "JP" }, { "name": "福岡県", "english": "Fukuoka", "country": "JP" }, { "name": "福島県", "english": "Fukushima", "country": "JP" }, { "name": "岐阜県", "english": "Gifu", "country": "JP" }, { "name": "群馬県", "english": "Gunma", "country": "JP" }, { "name": "広島県", "english": "Hiroshima", "country": "JP" }, { "name": "北海道", "english": "Hokkaidō", "country": "JP" }, { "name": "兵庫県", "english": "Hyōgo", "country": "JP" }, { "name": "茨城県", "english": "Ibaraki", "country": "JP" }, { "name": "石川県", "english": "Ishikawa", "country": "JP" }, { "name": "岩手県", "english": "Iwate", "country": "JP" }, { "name": "香川県", "english": "Kagawa", "country": "JP" }, { "name": "鹿児島県", "english": "Kagoshima", "country": "JP" }, { "name": "神奈川県", "english": "Kanagawa", "country": "JP" }, { "name": "高知県", "english": "Kōchi", "country": "JP" }, { "name": "熊本県", "english": "Kumamoto", "country": "JP" }, { "name": "京都府", "english": "Kyōto", "country": "JP" }, { "name": "三重県", "english": "Mie", "country": "JP" }, { "name": "宮城県", "english": "Miyagi", "country": "JP" }, { "name": "宮崎県", "english": "Miyazaki", "country": "JP" }, { "name": "長野県", "english": "Nagano", "country": "JP" }, { "name": "長崎県", "english": "Nagasaki", "country": "JP" }, { "name": "奈良県", "english": "Nara", "country": "JP" }, { "name": "新潟県", "english": "Niigata", "country": "JP" }, { "name": "大分県", "english": "Ōita", "country": "JP" }, { "name": "岡山県", "english": "Okayama", "country": "JP" }, { "name": "沖縄県", "english": "Okinawa", "country": "JP" }, { "name": "大阪府", "english": "Ōsaka", "country": "JP" }, { "name": "佐賀県", "english": "Saga", "country": "JP" }, { "name": "埼玉県", "english": "Saitama", "country": "JP" }, { "name": "滋賀県", "english": "Shiga", "country": "JP" }, { "name": "島根県", "english": "Shimane", "country": "JP" }, { "name": "静岡県", "english": "Shizuoka", "country": "JP" }, { "name": "栃木県", "english": "Tochigi", "country": "JP" }, { "name": "徳島県", "english": "Tokushima", "country": "JP" }, { "name": "東京都", "english": "Tōkyō", "country": "JP" }, { "name": "鳥取県", "english": "Tottori", "country": "JP" }, { "name": "富山県", "english": "Toyama", "country": "JP" }, { "name": "和歌山県", "english": "Wakayama", "country": "JP" }, { "name": "山形県", "english": "Yamagata", "country": "JP" }, { "name": "山口県", "english": "Yamaguchi", "country": "JP" }, { "name": "山梨県", "english": "Yamanashi", "country": "JP" }, { "short": "B", "name": "Burgenland", "country": "AT" }, { "short": "K", "name": "Kärnten", "country": "AT" }, { "short": "NÖ", "name": "Niederösterreich", "country": "AT" }, { "short": "OÖ", "name": "Oberösterreich", "country": "AT" }, { "short": "S", "name": "Salzburg", "country": "AT" }, { "short": "ST", "name": "Steiermark", "country": "AT" }, { "short": "T", "name": "Tirol", "country": "AT" }, { "short": "V", "name": "Vorarlberg", "country": "AT" }, { "short": "W", "name": "Wien", "country": "AT" }, { "short": "AC", "name": "Acre", "country": "BR" }, { "short": "AL", "name": "Alagoas", "country": "BR" }, { "short": "AP", "name": "Amapá", "country": "BR" }, { "short": "AM", "name": "Amazonas", "country": "BR" }, { "short": "BA", "name": "Bahia", "country": "BR" }, { "short": "CE", "name": "Ceará", "country": "BR" }, { "short": "DF", "name": "Distrito Federal", "country": "BR" }, { "short": "ES", "name": "Espírito Santo", "country": "BR" }, { "short": "GO", "name": "Goiás", "country": "BR" }, { "short": "MA", "name": "Maranhão", "country": "BR" }, { "short": "MT", "name": "Mato Grosso", "country": "BR" }, { "short": "MS", "name": "Mato Grosso do Sul", "country": "BR" }, { "short": "MG", "name": "Minas Gerais", "country": "BR" }, { "short": "PA", "name": "Pará", "country": "BR" }, { "short": "PB", "name": "Paraíba", "country": "BR" }, { "short": "PR", "name": "Paraná", "country": "BR" }, { "short": "PE", "name": "Pernambuco", "country": "BR" }, { "short": "PI", "name": "Piauí", "country": "BR" }, { "short": "RJ", "name": "Rio de Janeiro", "country": "BR" }, { "short": "RN", "name": "Rio Grande do Norte", "country": "BR" }, { "short": "RS", "name": "Rio Grande do Sul", "country": "BR" }, { "short": "RO", "name": "Rondônia", "country": "BR" }, { "short": "RR", "name": "Roraima", "country": "BR" }, { "short": "SC", "name": "Santa Catarina", "country": "BR" }, { "short": "SP", "name": "São Paulo", "country": "BR" }, { "short": "SE", "name": "Sergipe", "country": "BR" }, { "short": "TO", "name": "Tocantins", "country": "BR" }, { "name": "Abra", "country": "PH" }, { "name": "Agusan del Norte", "country": "PH" }, { "name": "Agusan del Sur", "country": "PH" }, { "name": "Aklan", "country": "PH" }, { "name": "Albay", "country": "PH" }, { "name": "Antique", "country": "PH" }, { "name": "Apayao", "country": "PH" }, { "name": "Aurora", "country": "PH" }, { "name": "Basilan", "country": "PH" }, { "name": "Bataan", "country": "PH" }, { "name": "Batanes", "country": "PH" }, { "name": "Batangas", "country": "PH" }, { "name": "Benguet", "country": "PH" }, { "name": "Biliran", "country": "PH" }, { "name": "Bohol", "country": "PH" }, { "name": "Bukidnon", "country": "PH" }, { "name": "Bulacan", "country": "PH" }, { "name": "Cagayan", "country": "PH" }, { "name": "Camarines Norte", "country": "PH" }, { "name": "Camarines Sur", "country": "PH" }, { "name": "Camiguin", "country": "PH" }, { "name": "Capiz", "country": "PH" }, { "name": "Catanduanes", "country": "PH" }, { "name": "Cavite", "country": "PH" }, { "name": "Cebu", "country": "PH" }, { "name": "Compostela Valley", "country": "PH" }, { "name": "Cotabato", "country": "PH" }, { "name": "Davao del Norte", "country": "PH" }, { "name": "Davao del Sur", "country": "PH" }, { "name": "Davao Occidental", "country": "PH" }, { "name": "Davao Oriental", "country": "PH" }, { "name": "Dinagat Islands", "country": "PH" }, { "name": "Eastern Samar", "country": "PH" }, { "name": "Guimaras", "country": "PH" }, { "name": "Ifugao", "country": "PH" }, { "name": "Ilocos Norte", "country": "PH" }, { "name": "Ilocos Sur", "country": "PH" }, { "name": "Iloilo", "country": "PH" }, { "name": "Isabela", "country": "PH" }, { "name": "Kalinga", "country": "PH" }, { "name": "La Union", "country": "PH" }, { "name": "Laguna", "country": "PH" }, { "name": "Lanao del Norte", "country": "PH" }, { "name": "Lanao del Sur", "country": "PH" }, { "name": "Leyte", "country": "PH" }, { "name": "Maguindanao", "country": "PH" }, { "name": "Marinduque", "country": "PH" }, { "name": "Masbate", "country": "PH" }, { "name": "Misamis Occidental", "country": "PH" }, { "name": "Misamis Oriental", "country": "PH" }, { "name": "Mountain Province", "country": "PH" }, { "name": "Negros Occidental", "country": "PH" }, { "name": "Negros Oriental", "country": "PH" }, { "name": "Northern Samar", "country": "PH" }, { "name": "Nueva Ecija", "country": "PH" }, { "name": "Nueva Vizcaya", "country": "PH" }, { "name": "Occidental Mindoro", "country": "PH" }, { "name": "Oriental Mindoro", "country": "PH" }, { "name": "Palawan", "country": "PH" }, { "name": "Pampanga", "country": "PH" }, { "name": "Pangasinan", "country": "PH" }, { "name": "Quezon", "country": "PH" }, { "name": "Quirino", "country": "PH" }, { "name": "Rizal", "country": "PH" }, { "name": "Romblon", "country": "PH" }, { "name": "Samar", "country": "PH" }, { "name": "Sarangani", "country": "PH" }, { "name": "Siquijor", "country": "PH" }, { "name": "Sorsogon", "country": "PH" }, { "name": "South Cotabato", "country": "PH" }, { "name": "Southern Leyte", "country": "PH" }, { "name": "Sultan Kudarat", "country": "PH" }, { "name": "Sulu", "country": "PH" }, { "name": "Surigao del Norte", "country": "PH" }, { "name": "Surigao del Sur", "country": "PH" }, { "name": "Tarlac", "country": "PH" }, { "name": "Tawi-Tawi", "country": "PH" }, { "name": "Zambales", "country": "PH" }, { "name": "Zamboanga del Norte", "country": "PH" }, { "name": "Zamboanga del Sur", "country": "PH" }, { "name": "Zamboanga Sibugay", "country": "PH" }, { "name": "Metro Manila", "country": "PH" }, { "name": "Hà Nội", "country": "VN" }, { "name": "Hà Giang", "country": "VN" }, { "name": "Cao Bằng", "country": "VN" }, { "name": "Bắc Kạn", "country": "VN" }, { "name": "Tuyên Quang", "country": "VN" }, { "name": "Lào Cai", "country": "VN" }, { "name": "Điện Biên", "country": "VN" }, { "name": "Lai Châu", "country": "VN" }, { "name": "Sơn La", "country": "VN" }, { "name": "Yên Bái", "country": "VN" }, { "name": "Hòa Bình", "country": "VN" }, { "name": "Thái Nguyên", "country": "VN" }, { "name": "Lạng Sơn", "country": "VN" }, { "name": "Quảng Ninh", "country": "VN" }, { "name": "Bắc Giang", "country": "VN" }, { "name": "Phú Thọ", "country": "VN" }, { "name": "Vĩnh Phúc", "country": "VN" }, { "name": "Bắc Ninh", "country": "VN" }, { "name": "Hải Dương", "country": "VN" }, { "name": "Hải Phòng", "country": "VN" }, { "name": "Hưng Yên", "country": "VN" }, { "name": "Thái Bình", "country": "VN" }, { "name": "Hà Nam", "country": "VN" }, { "name": "Nam Định", "country": "VN" }, { "name": "Ninh Bình", "country": "VN" }, { "name": "Thanh Hóa", "country": "VN" }, { "name": "Nghệ An", "country": "VN" }, { "name": "Hà Tĩnh", "country": "VN" }, { "name": "Quảng Bình", "country": "VN" }, { "name": "Quảng Trị", "country": "VN" }, { "name": "Thừa Thiên–Huế", "country": "VN" }, { "name": "Đà Nẵng", "country": "VN" }, { "name": "Quảng Nam", "country": "VN" }, { "name": "Quảng Ngãi", "country": "VN" }, { "name": "Bình Định", "country": "VN" }, { "name": "Phú Yên", "country": "VN" }, { "name": "Khánh Hòa", "country": "VN" }, { "name": "Ninh Thuận", "country": "VN" }, { "name": "Bình Thuận", "country": "VN" }, { "name": "Kon Tum", "country": "VN" }, { "name": "Gia Lai", "country": "VN" }, { "name": "Đắk Lắk", "country": "VN" }, { "name": "Đắk Nông", "country": "VN" }, { "name": "Lâm Đồng", "country": "VN" }, { "name": "Bình Phước", "country": "VN" }, { "name": "Tây Ninh", "country": "VN" }, { "name": "Bình Dương", "country": "VN" }, { "name": "Đồng Nai", "country": "VN" }, { "name": "Bà Rịa–Vũng Tàu", "country": "VN" }, { "name": "Thành phố Hồ Chí Minh", "country": "VN" }, { "name": "Long An", "country": "VN" }, { "name": "Tiền Giang", "country": "VN" }, { "name": "Bến Tre", "country": "VN" }, { "name": "Trà Vinh", "country": "VN" }, { "name": "Vĩnh Long", "country": "VN" }, { "name": "Đồng Tháp", "country": "VN" }, { "name": "An Giang", "country": "VN" }, { "name": "Kiên Giang", "country": "VN" }, { "name": "Cần Thơ", "country": "VN" }, { "name": "Hậu Giang", "country": "VN" }, { "name": "Sóc Trăng", "country": "VN" }, { "name": "Bạc Liêu", "country": "VN" }, { "name": "Cà Mau", "country": "VN" }];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('lol-taste-test/config/environment', ['ember'], function(Ember) {
  var prefix = 'lol-taste-test';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("lol-taste-test/app")["default"].create({"name":"lol-taste-test","version":"0.0.0+9f60be10"});
}

/* jshint ignore:end */
//# sourceMappingURL=lol-taste-test.map