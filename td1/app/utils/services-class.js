import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  services: [],
  countActive: computed("services.@each.active", function () {
    let count = 0;
    this.services.forEach(service => {
      if(service.active) {
        count++;
      }
    });
    return count;
  }),
  sumActive: computed("services.@each.active", function () {
    let sum = 0;
    this.services.forEach(service => {
      if(service.active) {
        sum += service.price;
      }
    });
    return sum;
  })
})
