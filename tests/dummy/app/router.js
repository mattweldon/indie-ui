import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layout');
  this.route('forms', function() {
    this.route('inputs');
    this.route('select');
  });

  this.route('list');
  this.route('typography');
});

export default Router;
