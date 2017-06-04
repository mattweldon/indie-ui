import Ember from 'ember';
import layout from '../templates/components/indie-table-header';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'thead',
  classNames: [
    'indie-table-header'
  ]
});
