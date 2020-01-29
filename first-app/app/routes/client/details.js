import Route from '@ember/routing/route';

export default class ClientDetailsRoute extends Route {
  actions = {
    fermer(){
      this.transitionTo('client');
    }
  }
}
