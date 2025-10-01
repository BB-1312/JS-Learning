const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? `${number} is a prime number` : `${number} is not a prime number`);
} else {
    console.log("The number is not a prime number.");
}
