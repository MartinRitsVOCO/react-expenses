import './Expenses.css'
import Card from '../UI/Card'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesItem from './ExpensesItem'

const Expenses = ({expenses}) => {
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
        { expensesList }
    </Card>
  )
}

export default Expenses