// Using super() to call parent class constructor or method
class Parent {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(`Parent name: ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call parent constructor
    this.age = age;
  }

  show() {
    super.show(); // Call parent method
    console.log(`Child age: ${this.age}`);
  }
}

const child = new Child("John", 10);
child.show();
