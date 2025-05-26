import { useExpenses } from '../context/ExpenseContext';

function Budgets() {
  const { budgets, setBudgets } = useExpenses();

  const handleBudgetChange = (category, value) => {
    setBudgets((prev) => ({
      ...prev,
      [category]: parseFloat(value) || 0,
    }));
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral mb-6">Budgets</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral mb-4">Set Budgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(budgets).map((category) => (
            <div key={category} className="flex flex-col">
              <label className="text-sm font-medium text-neutral">{category}</label>
              <input
                type="number"
                value={budgets[category]}
                onChange={(e) => handleBudgetChange(category, e.target.value)}
                className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-primary"
                placeholder="Enter budget"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Budgets;