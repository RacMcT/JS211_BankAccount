class BankAccount{
  constructor (accountNumber, owner, transactions){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

balance(amt) // not sure, but links to Transactions array and then does sum()?

deposit(amt) => {
  this.amt = parseInt(amt);
  if (this.transactions.amt <= 0){
    return ("Need to deposit positive balance")
  } else {
    this.transactions.amt.push(this);
    return ("thank you for your deposit of: " + this.amt)
  }

}

charge(payee, amt){
    this.payee = payee;
    this.amt = amt;
    this.payee.push(this);
}

  }
  }


//Functions for BankAccount Class:
// balance(amt)
// deposit()
// charge(payee, amt)


//The class should have the following 3 methods:
// balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.

// deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
// NOTE: You should not be able to deposit a negative amount

// charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
// NOTE: You should not be able to charge an amount that would make your balance dip below 0


class Transactions extends BankAccount{
  constructor (date, amt, payee){
    this.amt = amt;
    this.payee = payee;
    this.date = new Date();
  }
  }
}