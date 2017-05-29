import Ember from 'ember';
import layout from '../templates/components/indie-table-footer';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'tfoot',
  classNames: [
    'bg-silver'
  ]

});
