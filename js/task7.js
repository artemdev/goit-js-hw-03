const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    let transaction = {};
    if (type == Transaction.DEPOSIT || type == Transaction.WITHDRAW) {
      transaction.type = type;
    } else {
      return;
    }
    transaction.amount = amount;
    transaction.id = this.transactions.length + 1;

    this.transactions.push(transaction);
    return true;
  },

  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    return (this.balance += amount);
  },

  withdraw(amount) {
    this.createTransaction(amount, Transaction.WITHDRAW);

    if (amount > this.balance) {
      return 'недостаточно средств';
    } else {
      this.balance -= amount;
      return `средства успешно сняты`;
    }
  },

  getBalance() {
    return `Текущий баланс ${account.balance}`;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let result = [];
    for (const transaction of this.transactions) {
      if (type == Transaction.DEPOSIT || type == Transaction.WITHDRAW) {
        result.push(transaction);
      }
    }
    return result;
  },
};

console.log(account.createTransaction(19, 'withdraw'));
console.log(account.deposit(19));
console.log(account.withdraw(18));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('withdraw'));
