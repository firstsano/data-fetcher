import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { getOwner } from '@ember/application';
import CustomRouter from 'data-fetcher/lib/router';

moduleForComponent('main-menu', 'Integration | Component | main menu', {
  integration: true,
  setup() {
    const application = getOwner(this),
          Router = CustomRouter.extend()
    ;
    Router.map(function() {
      this.route('link1');
      this.route('link2');
    });
    application.register('router:main', Router.extend());
    application.lookup('router:main').setupRouter();
  }
});

const brand = 'My awesome brand';

test('it renders menu without items', function(assert) {
  assert.expect(2);

  this.set('brand', brand);
  this.render(hbs`{{main-menu brand=brand}}`);

  assert.equal(this.$().find('.main-menu__brand').text().trim(), brand);
  assert.equal(this.$('.main-menu__nav').find('.main-menu__nav-item').length, 0);
});

test('it renders menu with items', function(assert) {
  assert.expect(3);

  const menuItems = [
      {url: 'link1', label: 'link1', href: '/link1'},
      {url: 'link2', label: 'link2', href: '/link2'},
    ]
  ;
  this.set('brand', brand);
  this.set('items', menuItems);
  this.render(hbs`{{main-menu brand=brand items=items}}`);

  assert.equal(this.$('.main-menu__nav').find('.main-menu__nav-item').length, menuItems.length);
  let renderedLinks = this.$('.main-menu__nav').find('.main-menu__nav-link');
  for (let link of renderedLinks) {
    let $link = this.$(link),
        href = $link.attr('href'),
        label = $link.text().trim(),
        itemFilter = (item) => ((item.href === href) && (item.label === label))
    ;
    assert.ok(menuItems.filter(itemFilter));
  }
});
