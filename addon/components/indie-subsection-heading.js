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
    'db'
  ],
  title: '',
  description: '',
  // Methods
  didReceiveAttrs() {
    if (this.get('description')) {
      this.get('classNames').push('mb4');
    } else {
      this.get('classNames').push('mb2');
    }
  }
});