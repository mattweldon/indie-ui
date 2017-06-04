import Ember from 'ember';
import layout from '../templates/components/indie-form-control';

const {
  computed,
  Component
} = Ember;
export default Component.extend({
  layout,
  tagName: 'div',
  classNames: [
    'indie-form-control',
    'db',
    'mb4'
  ],
  classNameBindings: [
    'inputTypeModifier',
    'floatingClass',
    'invalidClass',
    'validClass',
    'inlineClass',
  ],
  // Attributes
  name: null,
  disabled: false,
  label: null,
  model: null,
  type: 'text',
  icon: null,
  tip: null,
  isFloating: true,
  isInline: false,
  max: null,
  min: null,
  step: null,
  cols: null,
  rows: 3,
  format: 'DD/MM/YYYY',
  placeholder: null,
  useUTC: true,
  // Select Attributes
  nullOption: null,
  options: [],
  modelOptions: null,
  modelLabel: null,
  // Computed
  hasNullOption: computed.bool('nullOption'),
  /**
   * The options attribute maybe in one of 3 formats:
   * - flat
   * - objects
   * - models
   * This method will convert them all to a usable format for the hbs template
   */
  computedOptions: computed('options', 'modelOptions', 'modelLabel', 'value', function() {

    var options = this.get('options'),
      modelOptions = this.get('modelOptions'),
      modelLabel = this.get('modelLabel'),
      value = this.get('value'),
      name = this.get('name');

    var array = [];

    // Check options is an array
    if (!options && typeof options.forEach !== 'function') {
      Ember.Logger.error('Options attribute must be instance of array: ' + this.get('name'));
      Ember.Logger.log(options);
    }

    if (modelOptions) {
      modelOptions.forEach(
        function(obj) {
          var option = {};

          if (modelLabel) {
            option.label = obj.get(modelLabel);
          } else {
            Ember.Logger.warn('Define modelLabel for: ' + name);
            option.label = obj;
          }
          option.value = obj;

          if (value !== null && typeof(value) === 'object' && value.get) {
            if (obj.id === value.get('id')) {
              if (option.set !== undefined && typeof option.set === 'function') {
                option.set('selected', true);
              } else {
                option.selected = true;
              }
            }
          }

          array.push(option);
        }
      );
    } else {
      options.forEach(
        function(obj) {
          var option = {};

          if (obj !== null && typeof obj !== 'object') {
            // option is a flat value
            option.label = obj;
            option.value = obj;
            // check if selected
            if (obj === value) {
              if (option.set !== undefined && typeof option.set === 'function') {
                option.set('selected', true);
              } else {
                option.selected = true;
              }
            }
          } else {
            option = obj;
            // check if selected
            if (obj.value === value) {
              if (option.set !== undefined && typeof option.set === 'function') {
                option.set('selected', true);
              } else {
                option.selected = true;
              }
            }
          }

          array.push(option);
        }
      );
    }

    return array;
  }),
  hasLabel: computed('label', 'type', function() {
    let label = this.get('label'),
      type = this.get('type');
    var noLabel = ['switch', 'checkbox'];
    if (noLabel.indexOf(type) !== -1) {
      return false;
    }
    return !!label;
  }),
  notValidating: computed.not('validation.isValidating'),
  didValidate: false,
  hasContent: computed.notEmpty('value'),
  isValid: computed.and('hasContent', 'validation.isValid', 'notValidating'),
  isInvalid: computed.oneWay('validation.isInvalid'),
  isTextarea: computed.equal('type', 'textarea'),
  isSwitch: computed.equal('type', 'switch'),
  isCheckbox: computed.equal('type', 'checkbox'),
  isRadio: computed.equal('type', 'radio'),
  isIcon: computed.equal('type', 'icon'),
  isSelect: computed.equal('type', 'select'),
  isDate: computed.equal('type', 'date'),
  showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation'),
  showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
  }),
  showWarningMessage: computed('validation.isDirty', 'validation.warnings.[]', 'isValid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !Ember.isEmpty(this.get('validation.warnings'));
  }),
  showTip: computed('tip', function() {
    return (this.get('tip'));
  }),
  // Classes
  inputTypeModifier: computed('type', function() {
    return 'indie-form-control--' + this.get('type');
  }),
  floatingClass: computed('isFloating', function() {
    if (this.get('isFloating')) {
      return '';
    }
  }),
  invalidClass: computed('isInvalid', function() {
    if ((this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid')) {
      return 'is-invalid';
    }
  }),
  validClass: computed('isValid', function() {
    if (this.get('isValid')) {
      return 'is-valid';
    }
  }),
  inlineClass: computed('isInline', 'type', function() {
    if (this.get('type') === 'radio') {
      if (this.get('isInline')) {
        return 'indie-form-control--inline-radio';
      }
    }
  }),
  inputClasses: computed('type', 'showErrorMessage', function() {
    var classNames = [
      'ba', 'bw1', 'pa3', 'w-100', 'f5', 'br1'
    ];
    if (this.get('showErrorMessage')) {
      classNames.push('b--red');
    } else {
      classNames.push('b--light-gray');
      classNames.push('plc--moon-gray');
    }
    return classNames.join(' ');
  }),
  labelClasses: computed('type', 'showErrorMessage', function() {
    var classNames = [
      'indie-form-control__label',
      'db',
      'f6',
      'mb2'
    ];
    if (this.get('showErrorMessage')) {
      classNames.push('red');
    } else {
      classNames.push('silver');
    }
    return classNames.join(' ');
  }),
  // Methods
  init() {
    this._super(...arguments);
    var propName = this.get('name');
    if (this.get("model")) {
      Ember.defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${propName}`));
      Ember.defineProperty(this, 'value', computed.alias(`model.${propName}`));
    }
  },
  actions: {
    selectedOption(option) {
      this.set('value', option);
    },
    checkOption(option) {
      this.set('value', option.value);
    },
    selectedDate(date) {
      this.set('value', date);
    },
  },
});
