import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense'
import { useState, useEffect } from 'react';
import ErrorPage from './components/Expenses/Error';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    fetch('http://localhost:3005/api/expenses')
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(response.status)
      }      
    })
    .then(data => {
      const newExpenses = [];
      for (const expense of data) {
        if (expense.date instanceof Date) {
          newExpenses.push(expense);
          continue;
        }
        expense.date = new Date(expense.date);
        if (expense.date.toString() === 'Invalid Date') {
          expense.date = new Date();
        }
        newExpenses.push(expense);
      }
      setIsFetching(false);
      setExpenses(newExpenses);
    })
    .catch(error => {
      setIsFetching(false);
      setFetchError({
        title: 'Error fetching expenses',
        message: 'Failed to fetch expenses. Please try again later.'
      });
      console.error(error);
    });
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses( (previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  const errorHandler = () => {
    setFetchError(null);
  }

  return (
    <>
      {fetchError && <ErrorPage title={fetchError.title} message={fetchError.message} onConfirm={errorHandler} />}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses isLoading={isFetching} expenses={expenses}>
      </Expenses>
    </>
  )
}

export default App
