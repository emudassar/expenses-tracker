import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useExpenses } from '../../context/ExpenseContext';

function BudgetSummary() {
  const { expenses, budgets } = useExpenses();

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalBudget = Object.values(budgets).reduce((sum, budget) => sum + budget, 0);
  const percentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral mb-4">Budget Summary</h3>
      <div className="flex justify-center">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              pathColor: percentage > 80 ? '#EF4444' : '#10B981',
              textColor: '#1F2937',
              trailColor: '#D1D5DB',
            })}
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-neutral">
          Spent: ${totalSpent.toFixed(2)} / Budget: ${totalBudget.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default BudgetSummary;