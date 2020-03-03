import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    delete: function (contact) {
      console.log(contact);
    },
    cancelDeletion: function (deleted) {
      console.log(deleted);
    }
  }
});
