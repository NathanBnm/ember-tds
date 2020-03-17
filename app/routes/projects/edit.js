import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    edit: function (project, name, description, startDate, dueDate) {
      this.get('store').findRecord('project', project.id, {reload: true}).then((project) => {
        project.set('name', name);
        project.set('description', description);
        project.set('startDate', startDate);
        project.set('dueDate', dueDate);
        this.transitionTo('projects');
      });
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
