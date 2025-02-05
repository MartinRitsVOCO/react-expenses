import './ExpensesList.css'

export default function ExpensesList({ isLoading, expenses }) {
    if (expenses.length === 0) {
        if (isLoading) {
            return <h2 className='expenses-list__fallback'>Loading...</h2>
        } else {
            return <h2 className='expenses-list__fallback'>No expenses found</h2>
        }
    } else {
        return (
            <ul className='expenses-list'>
                { expenses }
            </ul>
        )
    }
}
