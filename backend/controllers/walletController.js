let walletBalance = 2999;
let transactions = [
  {
    message: "Wallet Balance Added!",
    amount: 60,
    runningBalance: 1200,
    date: "28 March 2025, 09:35 PM",
    type: "credit",
  },
  {
    message: "Wallet used in order ids# 123",
    amount: 100,
    runningBalance: 1100,
    date: "28 March 2025, 09:40 PM",
    type: "debit",
  },
];

export const getWallet  = (req, res) => {
  res.json({ balance: walletBalance, transactions });
};

export const rechargeWallet = (req, res) => {
  const { amount } = req.body;
  walletBalance += amount;

  transactions.unshift({
    message: "Wallet Balance Added!",
    amount,
    runningBalance: walletBalance,
    date: new Date().toLocaleString("en-IN", { hour12: true }),
    type: "credit",
  });

 res.json({
  balance: walletBalance,
  transactions: transactions || [], 
});

};
