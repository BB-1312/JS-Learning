// Encapsulation Example
class BankAccount {
  #balance = 0; // private field

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. New balance: ₹${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc1 = new BankAccount("Raj");
acc1.deposit(2000);
acc1.withdraw(500);
console.log("Final Balance:", acc1.getBalance());
