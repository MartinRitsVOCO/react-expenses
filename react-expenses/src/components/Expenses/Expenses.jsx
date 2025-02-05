import './Expenses.css'
import Card from '../UI/Card'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesItem from './ExpensesItem'
import ExpensesList from './ExpensesList'

const Expenses = ({isLoading, expenses}) => {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const expensesList = expenses.filter(expense => {
    if (filteredYear === 'All') {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  }).map(expense => {
    return <ExpensesItem data={expense} key={expense.id} />
  })

  return (
    <Card className='expenses'>
        <ExpensesFilter onYearChange={filterChangeHandler} />
        <ExpensesList isLoading={isLoading} expenses={expensesList} />
    </Card>
  )
}

export default Expenses