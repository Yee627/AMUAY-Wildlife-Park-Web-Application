const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://userName@cluster0.in9qv.mongodb.net/wildlifeparkDB", {
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
  res.send("Express is here")
})

app.post("/addQuery", (req, res) => {
  const query = new Query({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    theme: req.body.theme,
    message: req.body.message
  });
  query.save()
    .then(() => res.send('Query received!'))
    .catch(err => console.log(err));

});

app.listen(4000, () => {
  console.log("Server started successfully");
});


