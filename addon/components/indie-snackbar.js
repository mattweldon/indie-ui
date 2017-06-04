import Ember from 'ember';
import layout from '../templates/components/indie-snackbar';

const {
  Component,
} = Ember;

export default Component.extend({
  // Services
  toaster: Ember.inject.service('indie-toaster'),
  // Attributes
  layout,
  classNames: [
    'indie-snackbar',
    'w-100', 
    'ma0', 
    'white', 
    'fw3', 
    'fixed', 
    'bottom-0'
  ],
  // Computed
  isVisible: Ember.computed('toaster.message', function() {
    return this.get('toaster.message') !== null;
  }),
  setClasses: Ember.observer('toaster.type', function() {
    let baseClasses = 'indie-snackbar__toast f6 fw4 w-90 w-70-l db pa3 ph4 center animated slideInUp';
    switch(this.get('toaster.type')) {
      case 'primary':
        this.set('classes', 'bg-dark-blue white ' + baseClasses);
        break;
      case 'error':
        this.set('classes', 'bg-dark-red white ' + baseClasses);
        break;
      case 'warning':
        this.set('classes', 'bg-gold white ' + baseClasses);
        break;
      default:
        this.set('classes', 'bg-dark-gray white ' + baseClasses);
        break;
    }
  })
});
