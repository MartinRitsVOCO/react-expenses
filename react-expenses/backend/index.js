import express from 'express';

const app = express();
const PORT = 3005;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/api/expenses', async (req, res) => {
    import('./data/expenses.json', { with: { type: 'json' } })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});