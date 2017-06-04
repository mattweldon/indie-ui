import Ember from 'ember';
import layout from '../templates/components/indie-table-header-cell';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'th',
  classNames: [
    'indie-table-header-cell',
    'fw6',
    'bb',
    'b--black-10',
    'tl',
    'pb3',
    'ph2',
    'bg-white'
  ]
});
