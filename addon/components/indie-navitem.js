import Ember from 'ember';
import layout from '../templates/components/indie-navitem';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: '',
  text: '',
  route: ''
});
