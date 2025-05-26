import { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

function Transactions() {
  const { expenses, setExpenses } = useExpenses();
  const [newTransaction, setNewTransaction] = useState({
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
  });

  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) || '' : value,
    }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const trimmedCategory = newTransaction.category.trim();
    if (trimmedCategory && Number(newTransaction.amount) > 0) {
      const newExpense = {
        id: Date.now(),
        category: trimmedCategory,
        amount: Number(newTransaction.amount),
        date: newTransaction.date,
      };
      setExpenses((prev) => [...prev, newExpense]);
      setNewTransaction({
        category: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
      });
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral dark:text-white mb-6">Transactions</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold text-neutral dark:text-white mb-4">Add Transaction</h2>
        <form onSubmit={handleAddTransaction} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral dark:text-white block mb-2">Category</label>
            <select
              name="category"
              value={newTransaction.category}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full"
              required
            >
              <option value="" disabled>Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-neutral dark:text-white block mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full"
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral dark:text-white block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full"
              required
            />
          </div>
          <div className="md:col-span-3">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 w-full md:w-auto"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral dark:text-white mb-4">Transaction History</h2>
        {expenses.length > 0 ? (
          <div className="grid grid-cols-[2fr,1fr,1fr] gap-2 text-sm text-neutral dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <span>Category</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Date</span>
          </div>
        ) : null}
        {expenses.length > 0 ? (
          <ul className="space-y-2">
            {expenses.map((expense) => (
              <li key={expense.id} className="grid grid-cols-[2fr,1fr,1fr] gap-2 text-sm text-neutral dark:text-white">
                <span className="truncate">{expense.category}</span>
                <span className="text-right">${expense.amount.toFixed(2)}</span>
                <span className="text-right">{expense.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-neutral dark:text-white">No transactions found.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;