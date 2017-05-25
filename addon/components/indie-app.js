import Ember from 'ember';
import layout from '../templates/components/indie-app';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: [
    'w-100', 'ma0', 'bg-white', 'sans-serif'
  ]
});
