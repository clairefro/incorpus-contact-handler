require('dotenv').config();
const fetch = require("node-fetch");
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const CONTACT_API_ENDPOINT = "https://clairefroelich.api-us1.com/api/3/contacts"

const app = express();
app.use(bodyParser.json());
//allow OPTIONS on all resources
// app.options('*', cors({credentials: true, origin: true}))

//CORS middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const port = process.env.PORT || 3000

///////////
// ROUTES
app.get('/', (req, res) => res.send('Go away!'))

app.get('/contacts', (req, res) => res.send('contact endpoint'))

app.post('/contacts', async (req, res) => {
  console.log(req.body);
  await fetch(CONTACT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY
      },
      body: {
        "contact": {
          "email": req.body.contact.email
        }
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log({err}))

  return res.send(`received ${req.body.email}`);
});
///////////

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
