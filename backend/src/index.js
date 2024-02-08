const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const conectar = require('./database/db');
const cors = require('cors');

// Routes
const userRoutes = require('./routes/user');

const app = express();
const { PORT } = process.env;
conectar();
app.use(bodyParser.json());
app.use(cors({origin: 'http://127.0.0.1:4200'}));


app.get('/api', (req, res) => res.status(200).json({ message: 'Working' }))
app.use('/api', userRoutes);


app.listen(PORT, () => {
	console.log(`Server listen on ${PORT}`);
})