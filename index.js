const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 0},
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 100 },
    },
  }
];



const accountTypeChecker = (accountBalanceHistory) => {
  accountBalanceHistory.sort(function(a, b) {return a.monthNumber - b.monthNumber});

  for(let i=1; i < accountBalanceHistory.length-1 && accountBalanceHistory.account !== null; i++){

    const lastBalance = accountBalanceHistory[0].account.balance.amount - accountBalanceHistory[1].account.balance.amount;
    let currentBalance= accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i+1].account.balance.amount;


    if(currentBalance !== lastBalance){

     return 'A';
    }
    
}
    return 'B'
};

module.exports = accountTypeChecker;

accountTypeChecker(accountBalanceHistory);
