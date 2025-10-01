// Arrow function version
const greet = (name = "there") => {
    console.log(`Hello, ${name}!`);
};

greet();          // Hello, there!
greet("Sujal"); // Hello, Sujal!
