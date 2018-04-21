import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  abbreviation: DS.attr(),
  comments: DS.hasMany('comment')
});
