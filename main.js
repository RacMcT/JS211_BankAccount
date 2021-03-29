class BankAccount{
  constructor (accountNumber, owner, transactions){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

balance(){
  let result = this.transactions.reduce((acc, transact) => acc + transact.amount , 0)
  console.log(result.toFixed(2))
}
deposit(amt){
  this.amt = parseInt(amt);
  if (amt <= 0){
    console.log ("Please note, you need to deposit positive balance")
  } 
  if (amt > 0){
    let transaction = new Transaction(amt, this.owner)
    console.log ("thank you for your deposit of: " + this.amt)
  }
  charge(payee, amt);{
    let amount = Math.abs(amt) * -1
    let transaction = new Transaction(amount, payee)
    this.transactions.push(transaction)
  }
}
}

class Transaction{
  constructor (amt, payee){
    this.amt = amt;
    this.payee = payee;
    this.date = new Date();
  }
  }

let rachel = new BankAccount(1111, 'Rachel McTavish');
let qwill = new BankAccount(1112, 'Qwilleran McTavish');

qwill.deposit(10000)
qwill.balance()
rachel.deposit(4.75)
rachel.deposit(174.52)
rachel.deposit(-8.50)
rachel.charge('Jean-Luc Picard', 14.99)
rachel.balance()


//FIRST CODE ATTEMPTS/NOTES:
// charge(payee, amt){
//     this.payee = payee;
//     this.amt = amt;
//     this.payee.push(this);
// }

//   }

  // balance(amt) // not sure, but links to Transactions array and then does sum()?

//     balance(){
//       let result = this.transactions.reduce((acc, transact) => acc + transact.amount , 0)
//       console.log(result.toFixed(2))
//     }
//     deposit(amt){
//       if (amt > 0){
//         let transaction = new Transaction(amt, this.owner)
//         this.transactions.push(transaction)
//       }
//       if (amt <= 0){
//         console.log(`If you wish to deposit you must input a positive amount.`) 
//       }
//     }
//     charge(payee, amt){
//       let amount = Math.abs(amt) * -1
//       let transaction = new Transaction(amount, payee)
//       this.transactions.push(transaction)
//     }
//   }
  


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





