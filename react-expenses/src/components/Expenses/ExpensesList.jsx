import './ExpensesList.css'

export default function ExpensesList({ expenses }) {
    if (expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    } else {
        return (
            <ul className='expenses-list'>
                { expenses }
            </ul>
        )
    }
}
