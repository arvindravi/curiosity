import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return 'Ask HN: ' + faker.lorem.sentence()
  },

  text() {
    return faker.lorem.paragraphs()
  },

  afterCreate(question, server) {
    server.createList('comment', 2, { text: faker.lorem.sentence(), question });
  }
});
