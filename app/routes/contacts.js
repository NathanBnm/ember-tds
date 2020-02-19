import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contacts-class';

export default Route.extend(
  {
  model() {
    let store = this.get('store');
    let contacts = store.findAll('contact');
    return Contacts.create({
      datas: contacts
    })
  }
});
