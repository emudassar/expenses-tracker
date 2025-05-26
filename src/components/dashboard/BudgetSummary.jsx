import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useExpenses } from '../../context/ExpenseContext';

function BudgetSummary() {
  const { expenses, budgets } = useExpenses();

  const totalSpent = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const totalBudget = Object.entries(budgets)
    .filter(([category]) => expenses.some((expense) => expense.category === category))
    .reduce((sum, [, budget]) => sum + Number(budget), 0);
  const percentage = totalBudget > 0 ? Math.min((totalSpent / totalBudget) * 100, 100) : 0;

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral dark:text-white mb-4">Budget Summary</h3>
      <div className="flex justify-center">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              pathColor: percentage > 80 ? '#ef4444' : '#10b981',
              textColor: '#1f2937',
              trailColor: '#d1d5db',
            })}
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-neutral dark:text-white">
          Spent: ${totalSpent.toFixed(2)} / Budget: ${totalBudget.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default BudgetSummary;