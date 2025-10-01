// JavaScript program to swap two variables without temp

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

// swap using array destructuring
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
