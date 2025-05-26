import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-neutral text-white p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="block p-2 hover:bg-primary/80 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions" className="block p-2 hover:bg-primary/80 rounded">Transactions</Link>
        </li>
        <li>
          <Link to="/budgets" className="block p-2 hover:bg-primary/80 rounded">Budgets</Link>
        </li>
        <li>
          <Link to="/categories" className="block p-2 hover:bg-primary/80 rounded">Categories</Link>
        </li>
        <li>
          <Link to="/settings" className="block p-2 hover:bg-primary/80 rounded">Settings</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;