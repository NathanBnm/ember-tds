import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  MAX: 100,
  content: '',
  info: '',
  size: computed("content", function () {
    if(this.get("content").length !== 0) {
      this.set("info", "Note modifiée")
    }
    return this.get("MAX") - this.get("content").length;
  }),
  style: computed("content", function () {
    return this.get("size") < 50 ? this.get("size") < 20 ? "alert-danger" : "alert-warning" : "alert-info";
  }),
  alertVisible: computed("info", function () {
    return this.get("info").length !== 0;
  })
});
