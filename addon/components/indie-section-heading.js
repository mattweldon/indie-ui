import Ember from 'ember';
import layout from '../templates/components/indie-section-heading';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'div',
  classNames: [
    'indie-section-heading',
    'db',
    'dt-ns',
    'mw9',
    'mb4',
    'center',
    'w-100',
    'bb',
    'b--light-gray'
  ],
  title: ''
});
