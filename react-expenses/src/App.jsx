import './App.css'
import './components/Expenses.css'
import ExpensesItem from './components/ExpensesItem'
import Card from './components/Card'

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

  return (
    <>
      <Card className='expenses'>
        <ExpensesItem data={expenses[0]} />
        <ExpensesItem data={expenses[1]} />
      </Card>
    </>
  )
}

export default App
