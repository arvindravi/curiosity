import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  avatar: DS.attr(),
  handle: DS.attr(),
  text: DS.attr(),
  question: DS.belongsTo('question')
});
