import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model() {
      let {project_id} = this.paramsFor('project');
      return RSVP.hash({
          project: this.get('store').find('project', project_id),
          steps: this.get('store').findAll('step').then(steps => steps.sortBy('order'))
      })
    }
  }
);
