import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add: function (lastName, firstName, email) {
      let store = this.get('store');
      let contact = store.createRecord('contact', {lastName: lastName, firstName: firstName, email: email});
      contact.save();
    }
  }
});
