import Controller from '@ember/controller';
import {set, get} from '@ember/object';

export default Controller.extend({
  actions: {
    toggleActive(service) {
      let active = get(service, 'active');
      set(service, 'active', !active);
    }
  }
});
