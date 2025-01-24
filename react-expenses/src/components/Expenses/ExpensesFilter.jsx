import './ExpensesFilter.css';
import { useState, useEffect, useRef } from 'react';

const ExpensesFilter = ({ onYearChange }) => {
    const [year, setYear] = useState( localStorage.getItem('expensesFilterYear') || 'All');
    const isInitialRender = useRef(true);
    
    // Jäetakse local storage-sse filtri väärtuse meelde, aga et esimese lehe laadimise aja ei käivitataks onYearChange-i kaks korda kontrollitakse useRef abil kas tegu on esmase käivitusega ning jäetakse sel puhul käivitamata.
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        localStorage.setItem('expensesFilterYear', year);
        onYearChange(year);
    }, [year])

    const changeYearHandler = (event) => {
        setYear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={year} onChange={changeYearHandler}>
                    <option value='All'>All</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    <option value='2028'>2028</option>
                    <option value='2029'>2029</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;