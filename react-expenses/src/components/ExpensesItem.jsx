/* eslint-disable react/prop-types */
import './ExpensesItem.css';
import './Card.css'
import ExpensesDate from './ExpensesDate';

const ExpensesItem = (props) => {

    return (
        <div className='card expense-item'>
            <ExpensesDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </div>
    )
}

export default ExpensesItem