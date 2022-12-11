const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5555;

const app = express();

// Enable body parser
app.use((express.json()));
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
  console.log(`Listening to port: ${port}.`);
});