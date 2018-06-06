import Component from '@ember/component';

export default Component.extend({
  isCollapsed: true,

  actions: {
    toggleCollapse() {
      this.toggleProperty('isCollapsed')
    }
  }
});
