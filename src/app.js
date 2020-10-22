require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// describe app to use express
const app = express();

// set morgan option based on node environment
const morganOption = (process.env.NODE_ENV === 'production') ? 'tiny' : 'common';

// set app options and basic security
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;