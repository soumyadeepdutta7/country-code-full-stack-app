const express = require('express');
const https = require('https');
const fs = require('fs');
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


const options = {
  key: fs.readFileSync('path/to/your/key.pem'), 
  cert: fs.readFileSync('path/to/your/cert.pem') 
};


const PORT = config.port || 5000;
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server started on https://localhost:${PORT}`);
});
