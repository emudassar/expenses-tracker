import BudgetSummary from '../components/dashboard/BudgetSummary';
import ExpensePieChart from '../components/charts/ExpensePieChart';
import RecentTransactions from '../components/dashboard/RecentTransactions';

function Dashboard() {
  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-neutral mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BudgetSummary />
        <ExpensePieChart />
        <RecentTransactions />
      </div>
    </div>
  );
}

export default Dashboard;