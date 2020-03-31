import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create();
  },
  actions: {
    save: function (step) {
      this.get('store').createRecord('step', step).save().then(() => this.transitionTo('steps'));
    }
  }
});
