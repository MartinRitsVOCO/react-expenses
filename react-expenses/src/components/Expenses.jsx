import './Expenses.css';

const ExpensesContainer = (props) => {

    return (
        <div className='expenses'>
            {props.children}
        </div>
    )
}

export default ExpensesContainer;