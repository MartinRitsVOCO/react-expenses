import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesItem from './ExpensesItem'

const Expenses = ({expenses}) => {
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  }

  const expensesList = expenses.map(expense => <ExpensesItem data={expense} key={expense.id} />)

  return (
    <Card className='expenses'>
        <ExpensesFilter onYearChange={filterChangeHandler} />
        { expensesList }
    </Card>
  )
}

export default Expenses