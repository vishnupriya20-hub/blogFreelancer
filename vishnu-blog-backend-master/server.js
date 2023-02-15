require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use('/api/calculate', require('./routes/calculateRoutes'));

if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4999;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
