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
    'indie-navbar',
    'w-100',
    'bg-brand'
  ],
  tagName: 'header',
  title: 'App Name',
  // Computed
  // Actions
  actions: {

  }
});
