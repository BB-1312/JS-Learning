// Example of a JavaScript class

class Person {
    // constructor method - runs when you create a new object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method 1
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // method 2
    getAge() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    // static method (can be called without creating an object)
    static info() {
        console.log("This is the Person class example.");
    }
}

// Create objects (instances) of Person
const person1 = new Person("Sujal", 22);
const person2 = new Person("Rahul", 25);

// Call methods
person1.greet();     // Hello, my name is Bhagirath.
person1.getAge();    // Sujal is 22 years old.

person2.greet();     // Hello, my name is Rahul.
person2.getAge();    // Rahul is 25 years old.

// Call static method
Person.info();       // This is the Person class example.
