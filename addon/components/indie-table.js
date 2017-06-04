import Ember from 'ember';
import layout from '../templates/components/indie-table';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'table',
  classNames: [
    'indie-table',
    'f6', 
    'w-100', 
    'center'
  ],
  attributeBindings: [
    'cellspacing'
  ],
  cellspacing: 0
});
