import Component from '@ember/component';

export default Component.extend({
  isExpanded: false,
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});
