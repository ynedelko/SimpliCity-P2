import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
