import Ember from 'ember';
import layout from '../templates/components/indie-table-row';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'tr',
  classNames: [
    'indie-table-row'
  ]
});
