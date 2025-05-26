import { useState, useEffect } from 'react';
import { useExpenses } from '../context/ExpenseContext';

function Settings() {
  const { resetData } = useExpenses();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleResetData = () => {
    if (confirm('Reset all expenses and budgets? This cannot be undone.')) {
      resetData();
      alert('Data reset successfully.');
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral dark:text-white mb-6">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral dark:text-white mb-4">Preferences</h2>
        <div className="mb-4">
          <label className="text-sm font-medium text-neutral dark:text-white block mb-2">Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 border rounded-md focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium text-neutral dark:text-white mb-2">Data Management</h3>
          <button
            onClick={handleResetData}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Reset All Data
          </button>
        </div>
        <div>
          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
            onClick={() => alert('Settings saved!')}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;