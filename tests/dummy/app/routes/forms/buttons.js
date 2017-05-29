import Ember from 'ember';

const {
  A,
  Route
} = Ember;

export default Route.extend({
  actions: {
    buttonAction: function(item) {
      alert(item.get('style') + ' button clicked');
    }
  },
});
