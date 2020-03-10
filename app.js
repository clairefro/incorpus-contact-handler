require('dotenv').config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

var whitelist = ['http://localhost:8000', 'https://localhost:8000']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

const app = express();
app.use(bodyParser.json());
//allow OPTIONS on all resources
app.options('*', cors({credentials: true, origin: true}))

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
