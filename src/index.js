const person = {
  name: 'Frank',
  walk() {
    console.log(this);
  }
};

const walk = person.walk;
walk();