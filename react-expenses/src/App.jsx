import './App.css'
import './components/Expenses/Expenses.css'
import ExpensesItem from './components/Expenses/ExpensesItem'
import Card from './components/UI/Card'
import NewExpense from './components/Expenses/NewExpense'

function App() {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New Book',
      price: 29.99
    },
    {
      date: new Date(2024, 10, 16),
      title: 'New TV',
      price: 599.99
    }
  ]
  const expensesList = expenses.map(expense => <ExpensesItem data={expense} />)

  return (
    <>
      <Card className='expenses'>
        <NewExpense />
        {expensesList}
      </Card>
    </>
  )
}

export default App
