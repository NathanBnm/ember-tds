import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete: function (step) {
      this.get('store').findRecord('step', step.id, {reload: true}).then((step) => {
        step.destroyRecord().then(() => {
          this.transitionTo('steps');
        });
      });
    }
  }
});
