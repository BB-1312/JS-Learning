const numObj = new Number(123);   // Number object
const numPrim = 123;              // Primitive number

console.log(numObj);              // [Number: 123]
console.log(numPrim);             // 123
console.log(numObj == numPrim);   // true  (compares value)
console.log(numObj === numPrim);  // false (different types)
