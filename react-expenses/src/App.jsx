import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense'
import { useState } from 'react';

const App = () => {
  const expensesBase = [
    {
      id: crypto.randomUUID(),
      date: new Date(2024, 10, 12),
      title: 'New Book',
      price: 29.99
    },
    {
      id: crypto.randomUUID(),
      date: new Date(2024, 11, 16),
      title: 'New TV',
      price: 599.99
    },
    {
      id: crypto.randomUUID(),
      date: new Date(2025, 1, 8),
      title: 'New Car',
      price: 24999
    }
  ]

  const [expenses, setExpenses] = useState(expensesBase);

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
