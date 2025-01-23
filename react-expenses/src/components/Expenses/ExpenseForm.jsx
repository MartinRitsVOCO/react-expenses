import './ExpenseForm.css';

const ExpensesForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-01-01" max="2029-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="new-expense__actions">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpensesForm;