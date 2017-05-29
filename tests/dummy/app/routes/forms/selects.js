import Ember from 'ember';

const {
  A,
  Route
} = Ember;

export default Route.extend({
  model() {

    var animalOptions = A();

    animalOptions.push(this.store.createRecord('animal', {
      name: 'Dog',
      longName: 'Big Dog',
    }));
    animalOptions.push(this.store.createRecord('animal', {
      name: 'Cat',
      longName: 'Shit Cat',
    }));
    animalOptions.push(this.store.createRecord('animal', {
      name: 'Fish',
      longName: 'Smelly Fish',
    }));
    animalOptions.push(this.store.createRecord('animal', {
      name: 'Bear',
      longName: 'Hungry Bear',
    }));
    animalOptions.push(this.store.createRecord('animal', {
      name: 'Rabbit',
      longName: 'Great Rabbit',
    }));
    animalOptions.push(this.store.createRecord('animal', {
      name: 'Tiger',
      longName: 'Wimpy Tiger',
    }));

    let colorOptions = A([
        'Red',
        'Green',
        'Blue',
        'Yellow',
      ]),
      numberOptions = A([{
        label: 'One',
        value: 1,
      }, {
        label: 'Two',
        value: 2,
      }, {
        label: 'Three',
        value: 3,
      }, {
        label: 'Four',
        value: 4,
      }, {
        label: 'Five',
        value: 5,
      }, {
        label: 'Six',
        value: 6,
      }, {
        label: 'Seven',
        value: 7,
      }, {
        label: 'Fourty Two',
        value: 42,
      }]);

    let user = this.store.createRecord('user', {
      color: 'Green',
      number: 7,
    });
    user.set('animal', animalOptions[4]);

    return {
      colorOptions: colorOptions,
      numberOptions: numberOptions,
      animalOptions: animalOptions,
      user: user,
    };
  },
  actions: {

  },
});
