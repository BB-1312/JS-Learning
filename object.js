// Working with Objects and Methods
const student = {
  name: "Ravi",
  marks: 88,
  greet() {
    console.log(`Hi, I’m ${this.name} and I scored ${this.marks}.`);
  }
};

student.greet();
student.city = "Ahmedabad";
console.log(student);
