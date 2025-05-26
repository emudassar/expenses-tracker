import { useExpenses } from '../../context/ExpenseContext';

function RecentTransactions() {
  const { expenses } = useExpenses();
  const recentExpenses = expenses.slice(0, 5); // Show latest 5 transactions

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral mb-4">Recent Transactions</h3>
      {recentExpenses.length > 0 ? (
        <ul className="space-y-2">
          {recentExpenses.map((expense) => (
            <li key={expense.id} className="flex justify-between text-sm">
              <span>{expense.category}</span>
              <span className="text-neutral">${expense.amount.toFixed(2)}</span>
              <span className="text-gray-500">{expense.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-neutral">No recent transactions.</p>
      )}
    </div>
  );
}

export default RecentTransactions;