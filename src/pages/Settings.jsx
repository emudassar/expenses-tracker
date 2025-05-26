import { useState } from 'react';

function Settings() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    // Note: Add logic to apply theme (e.g., update CSS classes or localStorage)
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-neutral mb-4">Preferences</h2>
        <div className="mb-4">
          <label className="text-sm font-medium text-neutral block mb-2">Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 border rounded-md focus:ring-2 focus:ring-primary"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
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