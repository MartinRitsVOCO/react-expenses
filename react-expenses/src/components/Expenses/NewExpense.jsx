import ExpensesForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: crypto.randomUUID()
        }
        onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;