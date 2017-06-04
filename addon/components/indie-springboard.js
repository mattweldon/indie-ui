import Ember from 'ember';
import layout from '../templates/components/indie-springboard';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: [
    'w-100', 
    'ma0', 
    'bg-brand', 
    'brand-body-font',
    'fw3'
  ]
});
