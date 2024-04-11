"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    depotsit(value) {
        this.balance += value;
    }
    withdraw(value) {
        if (value > this.balance) {
            console.log("Không đủ tiền để rút");
        }
        else {
            this.balance -= value;
        }
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, interestRate = 0.1) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate / 100;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit = 1000) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(value) {
        if (value > this.overdraftLimit) {
            console.log("Vượt quá mức rút cho phép");
        }
        else {
            this.balance -= value;
        }
    }
}
const savingAccount = new SavingAccount(1, 100000);
savingAccount.withdraw(1000000);
// console.log(savingAccount.balance);
console.log(savingAccount.calculateInterest());
savingAccount.depotsit(5000);
console.log(savingAccount.calculateInterest());
const account = new CheckingAccount(2, 10000);
account.withdraw(8000);
