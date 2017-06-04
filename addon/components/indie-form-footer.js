import Ember from 'ember';
import layout from '../templates/components/indie-form-footer';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'footer',
  classNames: [
    'indie-form-footer',
    'w-100',
    'pv3',
    'bt',
    'center',
    'b--light-gray',
    'tr'
  ]
});
