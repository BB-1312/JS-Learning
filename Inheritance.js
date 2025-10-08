// Inheritance Example
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log(`${this.name} says: Woof Woof!`);
  }
}

const dog1 = new Dog("Buddy");
dog1.sound();
