import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('individual-test-result', 'Integration | Component | individual test result', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{individual-test-result}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#individual-test-result}}
      template block text
    {{/individual-test-result}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
