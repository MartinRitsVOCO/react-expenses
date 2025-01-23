/* eslint-disable react/prop-types */
import './ExpensesItem.css';
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';

const ExpensesItem = ({data}) => {
    const {date, title, price} = data;

    return (
        <Card className='expense-item'>
            <ExpensesDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
        </Card>
    )
}

export default ExpensesItem