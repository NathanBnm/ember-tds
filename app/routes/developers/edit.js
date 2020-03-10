import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    edit: function (developer, identity) {
      this.get('store').findRecord('developer', developer.id, {reload: true}).then((developer) => {
        developer.set('identity', identity);
        this.transitionTo('developers');
      });
    },
    cancel: function () {
      this.transitionTo('developers');
    }
  }
});
