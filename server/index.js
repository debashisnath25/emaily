const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');


/* Mongoose starts */
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true },function(err, db) {
    if (err) throw err;
        console.log("Database connected!");
    });
/* Mongoose ends [Mongoose model class: 38] */
const app = express();
/* Basic Introduction starts
     app.get('/', (req, res) => {
      res.send({ Bye: "sdaad" });
    });
Basic Introduction Ends*/

/* Cookie session starts*/
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

/* cookie session ends */

/* Passport Google,Facebook Oauth starts
    authRoutes(app);
 Passport Google, Facebook Oauth Ends */

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
// console.log('Listening to '+ PORT);
app.listen(5000);
