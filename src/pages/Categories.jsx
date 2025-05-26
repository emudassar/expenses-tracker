import { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

function Categories() {
  const { expenses, setExpenses, budgets, setBudgets } = useExpenses();
  const [newCategory, setNewCategory] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const handleAddCategory = (e) => {
    e.preventDefault();
    const trimmedCategory = newCategory.trim();
    const budgetValue = Number(newBudget) || 0;
    if (trimmedCategory && !categories.includes(trimmedCategory) && budgetValue >= 0) {
      setExpenses((prev) => [
        ...prev,
        { id: Date.now(), category: trimmedCategory, amount: 0, date: new Date().toISOString().split('T')[0] },
      ]);
      setBudgets((prev) => ({ ...prev, [trimmedCategory]: budgetValue }));
      setNewCategory('');
      setNewBudget('');
    }
  };

  const handleDeleteCategory = (category) => {
    if (confirm(`Delete category "${category}" and all its expenses?`)) {
      setExpenses((prev) => prev.filter((expense) => expense.category !== category));
      setBudgets((prev) => {
        const newBudgets = { ...prev };
        delete newBudgets[category];
        return newBudgets;
      });
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral dark:text-white mb-6">Categories</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral dark:text-white mb-4">Manage Categories</h2>
        <form onSubmit={handleAddCategory} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New category"
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 flex-1"
            />
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              placeholder="Budget"
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 w-1/3"
              min="0"
              step="0.01"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category} className="flex justify-between text-sm text-neutral dark:text-white">
                <span>{category} (Budget: ${budgets[category]?.toFixed(2) || '0.00'})</span>
                <button
                  onClick={() => handleDeleteCategory(category)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-sm text-neutral dark:text-white">No categories found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Categories;