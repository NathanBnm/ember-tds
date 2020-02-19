import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  availableItems_: computed("availableItemsIds_.[]", function () {
      let items = [];
      this.get('availableItemsIds_').forEach(availableItem => {
        items.push(this.get('availableItems').find(item => item.id === availableItem.id))
      });
    return items;
  }),
  includedItems_: computed("includedItemsIds_.[]", function () {
    let items = [];
    this.get('includedItemsIds_').forEach(includedItem => {
      items.push(this.get('includedItems').find(item => item.id === includedItem.id))
    });
    return items;
  }),
});
