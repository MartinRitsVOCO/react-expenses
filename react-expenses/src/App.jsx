import './App.css'
import './components/Expenses/Expenses.css'
import ExpensesItem from './components/Expenses/ExpensesItem'
import Card from './components/UI/Card'
import NewExpense from './components/Expenses/NewExpense'

function App() {
  const expenses = [
    {
      id: crypto.randomUUID(),
      date: new Date(2024, 10, 12),
      title: 'New Book',
      price: 29.99
    },
    {
      id: crypto.randomUUID(),
      date: new Date(2024, 10, 16),
      title: 'New TV',
      price: 599.99
    }
  ]
  const expensesList = expenses.map(expense => <ExpensesItem data={expense} key={expense.id} />)

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log(expense);
  }

  return (
    <>
      <Card className='expenses'>
        <NewExpense onAddExpense={addExpenseHandler} />
        {expensesList}
      </Card>
    </>
  )
}

export default App
