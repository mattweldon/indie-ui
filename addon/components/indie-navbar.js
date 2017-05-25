import Ember from 'ember';
import layout from '../templates/components/indie-navbar';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Services
  // appState: Ember.inject.service('indie-app-state'),
  // Attributes
  layout,
  classNames: [
    'w-100',
    'bg-blue'
  ],
  tagName: 'header',
  title: 'App Name',
  // Computed
  // Actions
  actions: {

  }
});
