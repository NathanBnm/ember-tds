import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model({ project_id }) {
      return RSVP.hash({
        colors: ['black', 'blue', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'positive', 'negative'],
        project: this.get('store').findRecord('project', project_id),
        story: EmberObject.create(),
        tag: EmberObject.create(),
        developers: this.get('store').findAll('developer')
      });
    },
    actions: {
      saveStory: function(data) {
        this.get('store').createRecord('story', data).save().then(()=>this.transitionTo('projects'));
      },
      saveTag: function(data) {
        this.get('store').createRecord('tag', data).save();
      }
    }
  }
);
