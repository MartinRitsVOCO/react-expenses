import './App.css'
import Expenses from './components/Expenses/Expenses'
import ExpensesItem from './components/Expenses/ExpensesItem'
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
      <Expenses>
        <NewExpense onAddExpense={addExpenseHandler} />
        {expensesList}
      </Expenses>
    </>
  )
}

export default App
