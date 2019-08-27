const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();
/* Mongoose starts */
mongoose.connect(keys.mongoURI, { useNewUrlParser: true },function(err, db) {
if (err) throw err;
    console.log("Database connected!");
});
/* Mongoose ends [Mongoose model class: 38] */

/* Basic Introduction starts
 app.get('/', (req, res) => {
  res.send({ Bye: "sdaad" });
});
Basic Introduction Ends*/

/* Passport Google,Facebook Oauth starts */
  authRoutes(app);
/* Passport Google, Facebook Oauth Ends */

const PORT = process.env.PORT || 5000;
// console.log('Listening to '+ PORT);
app.listen(PORT);
