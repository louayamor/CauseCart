// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config'); // Import the config module

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const mongoURI = config.get('database.url');

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to CauseCartdb');
})
.catch((err) => {
    console.error('Database connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Welcome to the CauseCart API!');
});

// bch nzid routes w n7othom fi ficher routes.js
//const causeRoutes = require('./routes/causeRoutes');
//app.use('/api', causeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
