import { use } from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense'
import { useState, useEffect } from 'react';

const App = () => {
  const expensesBase = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
  
  if (expensesBase.length !== 0) {
    for (const expense of expensesBase) {
      if (expense.date instanceof Date) {
        continue;
      }
      expense.date = new Date(expense.date);
      if (expense.date.toString() === 'Invalid Date') {
        expense.date = new Date();
      }
    }
  }

  const [expenses, setExpenses] = useState(expensesBase);
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpenseHandler = (expense) => {
    setExpenses( (previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}>
      </Expenses>
    </>
  )
}

export default App
