const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require('dotenv').config({ path: "variables.env" });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const querySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  theme: String,
  message: String
});

const Query = mongoose.model("Query", querySchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

app.post("/addQuery", (req, res) => {
  const query = new Query({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    theme: req.body.theme,
    message: req.body.message
  });
  query.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});


const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;
const mailchimp = new Mailchimp(mc_api_key);

app.post("/subscribe", (req, res) => {
  mailchimp.post(`/lists/${list_id}/members`, {
    email_address: req.body.email,
    status: 'subscribed',
  })
    .then(result => res.send(result))
    .catch(err => res.send(err));

});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started successfully");
});


