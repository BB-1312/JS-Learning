let number = 5;
let fact = 1;
let i = 1;

while (i <= number) {
    fact *= i;
    i++;
}

console.log(`Factorial of ${number} is ${fact}`);
