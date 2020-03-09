require('dotenv').config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
//allow OPTIONS on all resources
app.options('*', cors())

const port = process.env.PORT || 3000

///////////
// ROUTES
app.get('/', (req, res) => res.send('Go away!'))

app.get('/contacts', (req, res) => res.send('contact endpoint'))

app.post('/contacts', (req, res) => {
  console.log(req.body);
  return res.send(`received ${req.body.email}`);
});
///////////

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
