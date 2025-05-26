import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useExpenses } from '../../context/ExpenseContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensePieChart() {
  const { expenses } = useExpenses();

  // Declare labels separately
  const labels = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'];

  // Calculate dataset data using labels
  const datasetData = expenses.reduce(
    (acc, expense) => {
      const index = labels.indexOf(expense.category);
      if (index !== -1) acc[index] += expense.amount;
      return acc;
    },
    new Array(labels.length).fill(0)
  );

  const data = {
    labels,
    datasets: [
      {
        data: datasetData,
        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6B7280'],
        hoverBackgroundColor: ['#4338CA', '#059669', '#D97706', '#DC2626', '#4B5563'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral mb-4">Expense Breakdown</h3>
      <Pie data={data} options={options} />
    </div>
  );
}

export default ExpensePieChart;
