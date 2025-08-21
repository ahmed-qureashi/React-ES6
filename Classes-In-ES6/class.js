class BankAccount{
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return this.balance;
        } else {
            throw new Error("Deposit amount must be positive");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            throw new Error("Withdrawal amount must be positive and less than or equal to the balance");
        }
    }
    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -=amount;
            targetAccount.deposit(amount);
            return this.balance;
        } else {
            throw new Error("Transfer amount must be positive and less than or equal to the balance");
        }
    }
    getBalance() {
        return this.balance;
    }
}

const myAccount = new BankAccount("123456789", "Ahmed Hassan", 1000); // Example Ammount A person start with 1000
const targetAccount = new BankAccount("987654321", "Fatima Ali", 500); // Another account to transfer money
console.log("Account Number:", myAccount.accountNumber," Account Holder MR.:",myAccount.accountHolder); // Outputs: 123456789
console.log("Your Current Account Balance is:",myAccount.getBalance()); // Outputs: 1000
console.log("After Deposit of 500 your Account Balance is:",myAccount.deposit(500)); // Outputs: 1500
console.log("You have withdrawn amount 200 your account balance remaining is",myAccount.withdraw(200)) // Withdraws 200, new balance is 1300  
console.log("your account balance is:",myAccount.getBalance()); // Outputs: 1300
console.log("Transferring 300 to target account..."); // Transfer 300 to another account
console.log("Your account balance after transfer is:", myAccount.transfer(300, targetAccount));