import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  services: [],
  countActive: computed("services@each.active", function () {
    let count = 0;
    let services = this.get('services');
    for(let i = 0; i < services.length; i++) {
      console.log(i, count);
      if(services[i]['active'])
        count ++;
    }
    return count;
  }),
  sumActive: computed("services@each.active", function () {
    let sum = 0;
    let services = this.get('services');
    for(let i = 0; i < services.length; i++) {
      if(services[i]['active'])
        sum += services[i]['price'];
    }
    return sum;
  })
})
