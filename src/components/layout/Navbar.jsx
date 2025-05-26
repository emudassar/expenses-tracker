import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold flex items-center hover:text-secondary transition-colors"
        >
          Expenses Tracker
        </Link>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/transactions" className="hover:underline">Transactions</Link>
          <Link to="/budgets" className="hover:underline">Budgets</Link>
          <Link to="/categories" className="hover:underline">Categories</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-primary/80">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;