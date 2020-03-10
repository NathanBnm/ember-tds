import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create();
  },
  actions: {
    save: function (identity) {
      this.get('store').createRecord('developer', {
        identity: identity
      }).save().then(() => this.transitionTo('developers'));
    }
  }
});
