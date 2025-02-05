import { useState, useRef, Fragment } from 'react';
import Error from './Error';
import './ExpenseForm.css';

const ExpensesForm = ({ onSaveExpenseData, onStateChange }) => {
    const [error, setError] = useState(null);

    //ma ei viitsi neid refe pidevalt kirjutada
    const refs = useRef({});

    const setRef = (key) => (el) => {
        refs.current[key] = el;
    };

    const submitHandler = (event) => {
        const title = refs.current.title.value;
        const price = refs.current.price.value;
        const date = refs.current.date.value;

        event.preventDefault();

        if (title.trim().length === 0 || price <= 0 || date.trim().length === 0) {
            const messageEnd = [
                title.trim().length === 0 ? 'title, ' : '',
                price <= 0 ? 'price, ' : '',
                date.trim().length === 0 ? 'date' : '',
            ].join('');
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid: ' + messageEnd,
            });
            return;
        }

        const expenseData = {
            title: title,
            price: parseFloat(price),
            date: new Date(date),
        };
        onSaveExpenseData(expenseData);
        refs.current.title.value = '';
        refs.current.price.value = '';
        refs.current.date.value = '';
        onStateChange();
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        refs.current.title.value = '';
        refs.current.price.value = '';
        refs.current.date.value = '';
        onStateChange();
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <Error title={error.title} message={error.message} onConfirm={ErrorHandler} />}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            id = "title"
                            ref = {setRef('title')}
                            type="text"
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input
                            id = "price"
                            ref = {setRef('price')}
                            type="number"
                            min="0.01" step="0.01"
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            id = "date"
                            ref = {setRef('date')}
                            type="date"
                            min="2024-01-01"
                            max="2029-12-31"
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="new-expense__actions">Add Expense</button>
                    <button className="new-expense__actions" onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
        </Fragment>
    )
}

export default ExpensesForm;