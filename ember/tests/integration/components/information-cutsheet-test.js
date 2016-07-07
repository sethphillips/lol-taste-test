import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('information-cutsheet', 'Integration | Component | information cutsheet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{information-cutsheet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#information-cutsheet}}
      template block text
    {{/information-cutsheet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
