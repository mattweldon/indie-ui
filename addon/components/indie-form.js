import Ember from 'ember';
import layout from '../templates/components/indie-form';

export default Ember.Component.extend({
  // Services
  toaster: Ember.inject.service('indie-toaster'),
  // Attributes
  layout,
  tagName: 'form',
  model: null,
  errorMessage: 'Please correct the errors in the form',
  // Computed
  childFormControls: Ember.computed('childViews', function() {

    var findChildFormControls = function(thisComponent) {
      console.log('findChildFormControls');
      let childViews = thisComponent.get('childViews');
      console.log(thisComponent);
      console.log(childViews);
      var childFormControls = childViews.filter((childView) => {
        return childView.constructor.toString().indexOf('indie-form-control') !== -1;
      });
      childViews.forEach(function(childView) {
        if (childFormControls.addObjects) {
          childFormControls.addObjects(findChildFormControls(childView));
        }
      });

      return childFormControls;
    };
    console.log('-->');
    return findChildFormControls(this);
  }),
  validate: function() {
    var errorMessages = [];

    var formControls = this.get('childFormControls');

    formControls.forEach(
      function(formControl) {
        if (formControl.get('validation') && !formControl.get('validation.isValid')) {
          if (errorMessages.addObjects) {
            errorMessages.addObjects(formControl.get('validation.errors').mapBy('message'));
          }
        }
        formControl.set('didValidate', true);
      }
    );

    if (errorMessages.length !== 0) {
      var errorMessage = errorMessages.join(', ');

      this.get('toaster').setMessage(this.get('errorMessage'));

      Ember.Logger.log("Errors: " + errorMessage);

      return false;
    }
    return true;
  },
  // Events
  submit(e) {
    e.preventDefault();

    if (this.validate()) {
      this.sendAction('action', this.get('model'));
    }
  },
  init() {
    this._super(...arguments);
    var propName = this.get('name');
    if (this.get("model")) {
      Ember.defineProperty(this, 'validation', Ember.computed.oneWay(`model.validations.attrs.${propName}`));
      Ember.defineProperty(this, 'value', Ember.computed.alias(`model.${propName}`));
    }
  },
  didInsertElement() {
    this._super(...arguments);
  }
});
