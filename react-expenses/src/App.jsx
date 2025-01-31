import { use } from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense'
import { useState, useEffect } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/expenses')
    .then(response => response.json())
    .then(data => {
      if (data.status !== 200) {
        console.error("Error fetching expenses:", data.error);
      } else {
        for (const expense of data) {
          if (expense.date instanceof Date) {
            continue;
          }
          expense.date = new Date(expense.date);
          if (expense.date.toString() === 'Invalid Date') {
            expense.date = new Date();
          }
        }
        setExpenses(data);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

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
