require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/contacts', (req, res) => res.send('contact endpoint'))

app.post('/contacts', (req, res) => {
  console.log(req);
  return res.send('received POST req');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
