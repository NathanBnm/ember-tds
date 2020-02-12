import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(note) {
      if(note.get("content").length !== 0) {
        note.set("info", "Note enregistrée");
      }
    },

    clear(note) {
      note.set("content", "");
      note.set("info", "");
    }
  }
});
