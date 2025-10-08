// Simulating Multiple Inheritance using Mixins
const CanRun = {
  run() {
    console.log(`${this.name} is running.`);
  }
};

const CanEat = {
  eat() {
    console.log(`${this.name} is eating.`);
  }
};

class Human {
  constructor(name) {
    this.name = name;
  }
}

// Combine behaviors
Object.assign(Human.prototype, CanRun, CanEat);

const person = new Human("David");
person.run();
person.eat();
