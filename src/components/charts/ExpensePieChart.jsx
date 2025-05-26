import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useExpenses } from '../../context/ExpenseContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensePieChart() {
  const { expenses } = useExpenses();

  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const dataByCategory = categories.map((category) => ({
    category,
    total: expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + Number(expense.amount), 0),
  }));

  const data = {
    labels: dataByCategory.map((item) => item.category),
    datasets: [
      {
        data: dataByCategory.map((item) => item.total),
        backgroundColor: ['#10b981', '#ef4444', '#3b82f6', '#f59e0b', '#8b5cf6'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral dark:text-white mb-4">Expense Breakdown</h3>
      {dataByCategory.length > 0 ? (
        <div className="max-w-sm mx-auto">
          <Pie data={data} options={options} />
        </div>
      ) : (
        <p className="text-sm text-neutral dark:text-white text-center">No expenses to display.</p>
      )}
    </div>
  );
}

export default ExpensePieChart;