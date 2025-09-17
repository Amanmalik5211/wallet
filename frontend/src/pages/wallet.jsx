import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState("all");
   
  const navigate = useNavigate();

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/wallet");
      setBalance(res.data.balance);
      setTransactions(res.data.transactions);
    } catch (err) {
      console.error("Error fetching wallet:", err);
    }
  };

  const handleRecharge = async () => {
    if (!amount) return;
    await axios.post("http://localhost:5000/api/wallet/recharge", {
      amount: Number(amount),
    });
    setAmount("");
    fetchWallet();
    navigate("/thankyou")
  };

  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((txn) => txn.type === filterType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 md:p-10">
      <div className="max-w-xl  mx-auto  space-y-6">

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Wallet Balance</h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-3xl sm:text-4xl font-semibold text-green-600">₹{balance}</p>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-400"
              />
              <button
                onClick={handleRecharge}
                className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
              >
                Recharge Now
              </button>
              
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Transaction History</h3>
            <div className="flex gap-2 flex-wrap">
              {["all", "credit", "debit"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                    filterType === type
                      ? type === "credit"
                        ? "bg-green-600 text-white"
                        : type === "debit"
                        ? "bg-orange-600 text-white"
                        : "bg-gray-800 text-white"
                      : type === "credit"
                      ? "bg-green-100 text-green-700"
                      : type === "debit"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {Array.isArray(filteredTransactions) && filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn, idx) => (
                <div
                  key={idx}
                  className={`p-4 mb-3 rounded-xl border ${
                    txn.type === "credit"
                      ? "bg-green-100 border-green-200"
                      : "bg-orange-100 border-orange-200"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{txn.message}</span>
                    <span className="text-lg font-bold text-gray-900">₹{txn.amount}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Balance: ₹{txn.runningBalance} | {txn.date}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-black-900">No transactions found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
