// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const PORT = 3001;
const json = require('./terms.json');

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => res.json(json));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
