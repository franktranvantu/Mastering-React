const person = {
  name: 'Frank',
  walk: function () {
    console.log('Walking...');
  },
  talk() {

  }
};

console.log(person.name);
person['walk']();