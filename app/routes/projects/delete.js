import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete: function (project) {
      this.get('store').findRecord('project', project.id, {reload: true}).then((project) => {
        project.destroyRecord().then(() => {
          this.transitionTo('projects');
        })
      })
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
