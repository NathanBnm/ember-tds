import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contacts-class';

export default Route.extend(
  {
    model() {
      let contacts = this.get('store').findAll('contact');
      return Contacts.create(contacts);
    }
  }
);
