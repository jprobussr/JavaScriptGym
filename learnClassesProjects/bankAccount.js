class BankAccount {
    constructor(accountHolder, accountNumber, initialBalance = 0) {
        this._accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this._balance = initialBalance;
    }

    // Getter for the balance 
    get balance() {
        return this._balance;
    }

    // Setter for account holder 
    set accountHolder(newName) {
        if (newName && newName.trim()) {
            this._accountHolder = newName;
        } else {
            console.log("Invalid name!");
        }
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdraw: $${amount}`);
        } else {
            console.log("Insufficient funds or invalid amount!");
        }
    }

     // Method to display the balance
     displayBalance() {
        console.log(`Account Balance: $${this._balance}`);
     }
}

const myAccount = new BankAccount('Jane Doe', '55505533', 2500);
myAccount.displayBalance();
myAccount.deposit(4599);
myAccount.withdraw(1);
myAccount.displayBalance();
myAccount.accountHolder = 'JD';
console.log(myAccount._accountHolder);