import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Curiousity',
  beforeModel() {
    this.replaceWith('questions');
  }
});
