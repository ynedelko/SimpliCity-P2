import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  secret: DS.attr(),
  listings: DS.hasMany('listing', {async: true})
});
