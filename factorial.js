// Factorial Program in JavaScript

function factorial(number) {
    if (number < 0) {
        return 'Error: Factorial of a negative number does not exist.';
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

// Example usage:
const num = 5; 
console.log(`The factorial of ${num} is ${factorial(num)}.`);
