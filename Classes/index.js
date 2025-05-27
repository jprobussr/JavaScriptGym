class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount}. New Balance is $${this.balance}`);
    } else {
      console.log('Negative Balance');
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
        console.log('You can not withdraw that much money');
    } else {
        this.balance -= amount;
        console.log(`You withdrew $${amount}. Your new balance is $${this.balance}`);
    }
  }
}

const john = new BankAccount('222', 'John', 11);

john.deposit(500);
john.withdraw(250);
john.withdraw(1000);

