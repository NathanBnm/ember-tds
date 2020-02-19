import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    addToIncluded: function(source, items, destination) {
      destination.pushObjects(items);
      source.removeObjects(items);
      let model = this.modelFor(this.lists);
      set(model, 'availableItemsIds_', []);
      set(model, 'includedItemsIds_', []);
    },
    addAllToIncluded() {

    },
    removeFromIncluded() {

    },
    removeAllFromIncluded() {

    }
  }
});
