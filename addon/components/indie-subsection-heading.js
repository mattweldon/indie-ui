import Ember from 'ember';
import layout from '../templates/components/indie-subsection-heading';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'div',
  classNames: [
    'db',
    'mb4'
  ],
  title: '',
  description: ''
});