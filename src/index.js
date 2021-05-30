const person = {
  name: 'Frank',
  walk: function () {
    console.log(this);
  }
};

const walk = person.walk;
walk();