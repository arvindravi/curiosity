import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  author() { return faker.name.findName() },
  avatar() { return faker.image.avatar() },
  handle() { return '@' + faker.internet.userName() },
  text()   { return faker.hacker.phrase() }
});
