import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  services: [],
  countActive: computed("services@each.active", function () {
      let count = 0;
      this.get("services").forEach(service => function() {
        if(service.get("active")) {
          count++;
        }
        return count;
      });
    }
  ),
  sumActive: computed("services@each.active", function () {
    return 0;
  })
})
