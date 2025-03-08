const express = require('express');
const cors = require('cors'); 
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './config.env' });

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.ATLAS_URI);

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('ClassLink');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

    app.get('/api/schedule', async (req, res) => {
    try {
        const db = await connect();
        const schedule = await db.collection('Horario').findOne({});
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/schedule', async (req, res) => {
    try {
        const db = await connect();
        const result = await db.collection('Horario').replaceOne(
            {}, 
            req.body, 
            { upsert: true }
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});