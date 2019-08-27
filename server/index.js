const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();
mongoose.connect(keys.mongoURI);
/* Basic Introduction starts
 app.get('/', (req, res) => {
  res.send({ Bye: "sdaad" });
});
Basic Introduction Ends*/

/* Passport Google Oauth starts */
  authRoutes(app);
/* Passport Google Oauth Ends */

const PORT = process.env.PORT || 5000;
// console.log('Listening to '+ PORT);
app.listen(PORT);
