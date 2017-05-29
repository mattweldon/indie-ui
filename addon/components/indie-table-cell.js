import Ember from 'ember';
import layout from '../templates/components/indie-table-cell';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'td',
  classNames: [
   'pv3', 
   'ph2',
   'bb',
   'b--black-20'
  ]
});
