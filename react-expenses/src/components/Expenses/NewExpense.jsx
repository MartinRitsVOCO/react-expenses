import { useState } from "react";
import ExpensesForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
    const [formHidden, setFormHidden] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: crypto.randomUUID()
        }
        onAddExpense(expenseData);
    }

    const formStateHandler = () => {
        setFormHidden(true);
    }

    return (
        <div className="new-expense">
            { formHidden ? <button onClick={() => setFormHidden(false)}>Add New Expense</button> : <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onStateChange={formStateHandler} /> } 
        </div>
    )
}

export default NewExpense;