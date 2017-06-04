import Ember from 'ember';
import layout from '../templates/components/indie-table-footer-cell';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'td',
  classNames: [
    'indie-table-footer-cell',
    'pv3',
    'ph2',
    'tl',
    'bg-near-white'
  ]
});
