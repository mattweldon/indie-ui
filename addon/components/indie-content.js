import Ember from 'ember';
import layout from '../templates/components/indie-content';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'main',
  classNames: [
    'w-90',
    'w-70-l',
    'pa3',
    'ph4-ns',
    'center'
  ]
});
