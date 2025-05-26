import { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Food', amount: 300, date: '2025-05-01' },
    { id: 2, category: 'Transport', amount: 150, date: '2025-05-02' },
    { id: 3, category: 'Utilities', amount: 200, date: '2025-05-03' },
    { id: 4, category: 'Entertainment', amount: 100, date: '2025-05-04' },
    { id: 5, category: 'Others', amount: 50, date: '2025-05-05' },
  ]);

  const [budgets, setBudgets] = useState({
    Food: 500,
    Transport: 300,
    Utilities: 400,
    Entertainment: 200,
    Others: 100,
  });

  const [categories, setCategories] = useState([
    'Food',
    'Transport',
    'Utilities',
    'Entertainment',
    'Others',
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const addBudget = (category, amount) => {
    setBudgets({ ...budgets, [category]: amount });
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, budgets, categories, addExpense, addBudget, addCategory }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}