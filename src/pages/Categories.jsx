import { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

function Categories() {
  const { expenses } = useExpenses();
  const [newCategory, setNewCategory] = useState('');
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory && !categories.includes(newCategory)) {
      // Note: This is a simplified example; you may need to update ExpenseContext to persist new categories
      setNewCategory('');
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral mb-6">Categories</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral mb-4">Manage Categories</h2>
        <form onSubmit={handleAddCategory} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New category"
              className="p-2 border rounded-md focus:ring-2 focus:ring-primary flex-1"
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
              <li key={category} className="text-sm text-neutral">
                {category}
              </li>
            ))
          ) : (
            <p className="text-sm text-neutral">No categories found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Categories;