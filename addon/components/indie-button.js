import Ember from 'ember';
import layout from '../templates/components/indie-button';

const {
  Component
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'button',
  click() {
    this.sendAction('action', this);
    this.sendAction('on-click', this);
  }
});
