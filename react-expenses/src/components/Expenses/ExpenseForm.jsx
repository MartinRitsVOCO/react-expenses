import { useState } from 'react';
import './ExpenseForm.css';

const ExpensesForm = ({ onSaveExpenseData, onStateChange }) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }
    const priceChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            price: parseFloat(userInput.enteredPrice),
            date: new Date(userInput.enteredDate)
        };
        onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        })
        onStateChange();
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        setUserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        })
        onStateChange();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} value={userInput.enteredPrice} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-01-01" max="2029-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="new-expense__actions">Add Expense</button>
                <button className="new-expense__actions" onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpensesForm;