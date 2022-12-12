const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5555;

const app = express();

// Enable body parser
app.use((express.json()));
app.use(express.urlencoded({ extended: false }));

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
  console.log(`Listening to port: ${port}.`);
});

module.exports = app;