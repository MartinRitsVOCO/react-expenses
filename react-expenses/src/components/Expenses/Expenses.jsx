import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses({children}) {
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  }

  return (
    <Card className='expenses'>
        <ExpensesFilter onYearChange={filterChangeHandler} />
        {children}
    </Card>
  )
}

export default Expenses