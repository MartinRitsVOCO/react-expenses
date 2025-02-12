import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3005;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const expensesPath = path.join(__dirname, 'data', 'expenses.json');
let expenses = await fs.readFile(expensesPath, 'utf-8').then(data => JSON.parse(data)).catch(err => {
    console.error(err);
    return [];
});

let updateExpenses = async (newExpense) => {
    expenses.push(newExpense);
    await fs.writeFile(expensesPath, JSON.stringify(expenses), 'utf-8');
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json());

app.get('/api/expenses', async (req, res) => {
    res.status(200).json(expenses);
});

app.post('/api/add-expense', async (req, res) => {
    const newExpense = req.body;

    if (!newExpense || !newExpense.title || !newExpense.price || !newExpense.date) {
        console.log('Invalid expense data', newExpense, req.body);
        return res.status(400).json({ message: 'Invalid expense data' });
    }

    updateExpenses(newExpense)
    .then(() => {
        res.status(201).json({ message: 'Expense added successfully', expense: newExpense});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Expense not added', error: err });
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});