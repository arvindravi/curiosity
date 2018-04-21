import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title()  { return 'Ask A KITTY: ' + faker.company.catchPhrase() + '?' },
  text()   { return faker.lorem.paragraphs() },
  image()  { return 'http://placekitten.com/128/128' },
  author() { return faker.name.findName() },

  afterCreate(question, server) {
    server.createList('comment', 2, { text: faker.lorem.sentence(), question });
  }
});
