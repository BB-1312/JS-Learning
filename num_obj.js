// Create number obejct and insert value
const numObj = new Number('123');
// The valueof function can return primitive value of object
const num = numObj.valueOf();
// toString function can convert value of number to string
const numStr = numObj.toString();
// The === is can check equality in value and type in this program the primitiveand the object are different types so it can return false.
console.log(numObj===123);
