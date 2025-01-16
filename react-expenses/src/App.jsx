import './App.css'
import ExpensesItem from './components/ExpensesItem'

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
      <ExpensesItem data={expenses[0]} />
      <ExpensesItem data={expenses[1]} />
    </>
  )
}

export default App
