import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model: function() {
    var animalOptions = Ember.A();

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
    return animalOptions;
  },
  actions: {
    primaryItemAction: function(item) {
      window.alert("primary action called for " + item);
    },
    secondaryItemAction: function(item) {
      window.alert("secondary action called for " + item);
    },
  },
});
