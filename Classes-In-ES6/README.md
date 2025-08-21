# ES6 Bank Account Management System

This Lesson demonstrates various ES6 (ECMAScript 2015) concepts through a simple bank account management system very basic.For More Detail use the docs notes created,
Below are the key ES6 concepts used in this project:

## ES6 Concepts Explained

### 1. Class Declaration
```javascript
class BankAccount { }
```
- Classes in ES6 provide a cleaner and more object-oriented way to create objects and implement inheritance
- They serve as templates for creating objects with similar properties and methods
- Classes are "special functions" that encapsulate data and behavior

### 2. Constructor Method
```javascript
constructor(accountNumber, accountHolder, balance = 0)
```
- The `constructor` is a special method that gets called when a new instance of the class is created
- It initializes the object's properties
- In this example, it takes three parameters with `balance` having a default value of 0 (ES6 default parameters feature)

### 3. The 'this' Keyword
```javascript
this.accountNumber = accountNumber;
```
- `this` refers to the current instance of the class
- When used inside a class method, it points to the object that the method belongs to
- It's used to access and modify the object's properties

### 4. Class Methods
Methods in the class demonstrate modern ES6 method definitions:
```javascript
deposit(amount) { }
withdraw(amount) { }
transfer(amount, targetAccount) { }
getBalance() { }
```
- Methods are functions that belong to the class
- They can access and modify the object's properties using `this`
- They can take parameters and return values

### 5. Object Creation
```javascript
const myAccount = new BankAccount("123456789", "Ahmed Hassan", 1000);
```
- The `new` keyword is used to create instances of a class
- It calls the constructor method and initializes the object
- `const` is used for variable declaration (ES6 feature for block-scoped variables)

## Features of the Bank Account System

1. **Account Creation**: Create new accounts with account number, holder name, and initial balance
2. **Deposit**: Add money to the account
3. **Withdraw**: Remove money from the account
4. **Transfer**: Transfer money between accounts
5. **Balance Check**: View current account balance

## Error Handling
The system includes error checking for:
- Negative deposit amounts
- Insufficient balance for withdrawals
- Invalid transfer amounts

## Usage Example
```javascript
const myAccount = new BankAccount("123456789", "Ahmed Hassan", 1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // 1500
myAccount.withdraw(200); // 1300
```

## Best Practices Demonstrated
1. **Encapsulation**: Data and methods are bundled together
2. **Input Validation**: All monetary operations are validated
3. **Error Handling**: Appropriate error messages for invalid operations
4. **Clean Code**: Clear method names and logical organization

## Additional ES6 Features Used
- Template literals for string interpolation
- Arrow functions (if any are added later)
- Block-scoped variables (`const` and `let`)
- Default parameters in constructor
