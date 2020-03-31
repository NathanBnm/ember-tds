import Route from '@ember/routing/route';

export default Route.extend({
  model({step_id}) {
    return this.get('store').find('step', step_id);
  },
  actions: {
    edit: function (step) {
      step.save().then(() => this.transitionTo('steps'));
    }
  }
});
