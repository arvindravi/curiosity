import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Questions | Curiosity',
  model() {
    return this.get('store').findAll('question');
  }
});
