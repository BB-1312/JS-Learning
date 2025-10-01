// program to reverse a string using built-in methods

function reverseString(str) {
    return str.split("").reverse().join("");
}

const string = prompt("Enter a string: ");
console.log(reverseString(string));
