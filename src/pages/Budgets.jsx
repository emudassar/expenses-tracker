import { useExpenses } from '../context/ExpenseContext';

function Budgets() {
  const { expenses, budgets, setBudgets } = useExpenses();
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const handleBudgetChange = (category, value) => {
    const newValue = Number(value);
    if (newValue >= 0 || value === '') {
      setBudgets((prev) => ({
        ...prev,
        [category]: value === '' ? 0 : newValue,
      }));
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral dark:text-white mb-6">Budgets</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral dark:text-white mb-4">Set Budgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category} className="flex flex-col">
              <label className="text-sm font-medium text-neutral dark:text-white">{category}</label>
              <input
                type="number"
                value={budgets[category] === 0 ? '' : budgets[category] || ''}
                onChange={(e) => handleBudgetChange(category, e.target.value)}
                className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter budget"
                min="0"
                step="0.01"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Budgets;