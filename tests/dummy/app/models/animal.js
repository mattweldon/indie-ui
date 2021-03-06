import DS from 'ember-data';
import {
 validator,
 buildValidations
} from 'ember-cp-validations';

const {
  attr,
  hasMany,
  Model
} = DS;

const Validations = buildValidations({
  name: [
    validator('presence', true)
  ],
});

export default Model.extend(Validations, {
  name: attr('string'),
  users: hasMany('user'),
});
