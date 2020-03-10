import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create();
  },
  actions: {
    save: function (name, description, startDate, dueDate) {
      this.get('store').createRecord('project', {
        name: name,
        description: description,
        startDate: startDate,
        dueDate: dueDate
      }).save().then(() => this.transitionTo('projects'));
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
