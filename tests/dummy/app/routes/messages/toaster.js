import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  // Services
  toaster: Ember.inject.service('indie-toaster'),
  // Actions
  actions: {
    triggerDefault: function() {
      this.get('toaster').setMessage('Example default message');
    },
    triggerError: function() {
      this.get('toaster').setMessage('Example error message', 'error');
    },
    triggerWarning: function() {
      this.get('toaster').setMessage('Example warning message', 'warning');
    },
  },
});
