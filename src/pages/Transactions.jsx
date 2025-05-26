import { useExpenses } from '../context/ExpenseContext';

function Transactions() {
  const { expenses } = useExpenses();

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral mb-6">Transactions</h1>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral mb-4">Recent Transactions</h2>

        {expenses.length > 0 ? (
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{expense.name}</p>
                  <p className="text-sm text-gray-500">
                    {expense.category} · {new Date(expense.date).toLocaleDateString()}
                  </p>
                </div>
                <div
                  className={`font-bold ${
                    expense.amount < 0 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {expense.amount < 0 ? '-' : '+'}${Math.abs(expense.amount).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-neutral">No transactions found.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;
