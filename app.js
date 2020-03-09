require('dotenv').config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const whitelist = ['http://localhost:8000/', 'https://localhost:8000/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
app.use(bodyParser.json());
//allow OPTIONS on all resources
// app.options('*', cors())
//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const port = process.env.PORT || 3000

///////////
// ROUTES
app.get('/', (req, res) => res.send('Go away!'))

app.get('/contacts', (req, res) => res.send('contact endpoint'))

app.post('/contacts', cors(corsOptions),(req, res) => {
  console.log(req.body);
  return res.send(`received ${req.body.email}`);
});
///////////

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
