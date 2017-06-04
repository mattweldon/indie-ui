import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layouts', function() {
    this.route('external');
    this.route('internal');
    this.route('content');
  });

  this.route('forms', function() {
    this.route('inputs');
    this.route('buttons');
    this.route('selects');
    this.route('validations');
  });

  this.route('lists');
  this.route('tables');
  this.route('typography');
  this.route('messages', function() {
    this.route('toaster');
  });
});

export default Router;
