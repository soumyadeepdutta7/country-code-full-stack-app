const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/config');
const cors = require('cors');

const app = express();


connectDB();


app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/countries', require('./routes/countryRoutes'));
app.use('/api/favorites', require('./routes/favoriteRoutes'));
app.use('/api/history', require('./routes/historyRoutes'));

const PORT = config.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
