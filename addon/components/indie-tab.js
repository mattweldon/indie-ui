import Ember from 'ember';
import layout from '../templates/components/indie-tab';

const {
  Component
} = Ember;

export default Component.extend({
  // Services
  router: Ember.inject.service('-routing'),
  // Attributes
  layout,
  tagName: '',
  text: '',
  route: '',
  icon: '',
  // Computed
  isActive: Ember.computed('router.currentRouteName', function() {
    let currentPath = this.get('router.currentRouteName');
    console.log(currentPath);
    return currentPath == this.get('route');
  })
});
