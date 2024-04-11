class Account{
    protected accountNumber: number;
    protected balance: number;
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    depotsit(value: number): void{
        this.balance += value;
    }
    withdraw(value: number): void{
        if(value > this.balance){
            console.log("Không đủ tiền để rút");
        }else{
            this.balance -= value;
        }
    }
}
class SavingAccount extends Account{
    private interestRate: number;
    constructor(accountNumber: number, balance: number, interestRate: number = 0.1) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest(): number{
        return this.balance * this.interestRate / 100;
    }
}
class CheckingAccount extends Account{
    private overdraftLimit: number;
    constructor(accountNumber: number, balance: number, overdraftLimit: number = 1000) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(value: number): void{
        if(value > this.overdraftLimit){
            console.log("Vượt quá mức rút cho phép");
        }else{
            this.balance -= value;
        }
    }
}
const savingAccount = new SavingAccount(1, 100000);
savingAccount.withdraw(1000000)
// console.log(savingAccount.balance);
console.log(savingAccount.calculateInterest());
savingAccount.depotsit(5000);
console.log(savingAccount.calculateInterest());
const account = new CheckingAccount(2, 10000)
account.withdraw(8000)