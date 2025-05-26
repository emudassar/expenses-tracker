import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-primary/80 text-white' : 'hover:bg-primary/80';
  };

  return (
    <aside className="w-64 bg-neutral text-white p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className={`block p-2 rounded transition-colors ${isActive('/')}`}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/transactions" className={`block p-2 rounded transition-colors ${isActive('/transactions')}`}>
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/budgets" className={`block p-2 rounded transition-colors ${isActive('/budgets')}`}>
            Budgets
          </Link>
        </li>
        <li>
          <Link to="/categories" className={`block p-2 rounded transition-colors ${isActive('/categories')}`}>
            Categories
          </Link>
        </li>
        <li>
          <Link to="/settings" className={`block p-2 rounded transition-colors ${isActive('/settings')}`}>
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;