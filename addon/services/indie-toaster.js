import Ember from "ember";

export default Ember.Service.extend({
  message: null,
  setMessage(text, type) {
    if (type == undefined) {
      type = 'default';
    }
    
    this.set('type', type);
    this.set('message', text);

    Ember.run.later(() => {
      this.set('type', null);
      this.set('message', null);
    }, 3000);
  },
  getMessage() {
    return this.get('message');
  }
});
