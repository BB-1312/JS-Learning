// program to generate fibonacci series using recursion

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const number = parseInt(prompt('Enter the number of terms: '));

console.log('Fibonacci Series:');
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
}
