import Ember from 'ember';
import layout from '../templates/components/indie-button';

const {
  Component
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'button',
  classNames: [
    'ba',
    'bw0',
    'ml3',
    'br1',
    'pa3',
    'ph4',
    'f6',
    'pointer',
    'bg-animate',
  ],
  primaryClassNames: [
    'hover-bg-dark-blue',
    'bg-blue',
    'b--dark-blue',
    'white',
  ],
  positiveClassNames: [
    'hover-bg-dark-green',
    'bg-green',
    'b--dark-green',
    'white',
  ],
  negativeClassNames: [
    'hover-bg-dark-red',
    'bg-red',
    'b--dark-red',
    'white',
  ],
  linkClassNames: [
    'blue',
    'link',
    'underline',
    'bg-white'
  ],
  blockClassNames: [
    'db',
    'w-100',
    'mh0'
  ],
  // Methods
  didReceiveAttrs() {
    var styleName = this.get('style');
    if (styleName) {
      var styleNames = styleName.split(' ');
      console.log(styleNames);
      for (var i = 0; i < styleNames.length; i++) {
        let styleClasses = this.get(styleNames[i] + 'ClassNames');
        console.log(i);
        console.log(styleClasses);
        let defaultClasses = this.get('classNames');
        this.set('classNames', defaultClasses.concat(styleClasses));
      }
    }
  },
  click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this);
      this.sendAction('on-click', this);
    }
  }
});