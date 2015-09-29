import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addCategory() {
      var params = {
        name: this.get('name'),
        secret: this.get('secret'),
      };
      this.sendAction('addCategory', params);
    }
  }
});
