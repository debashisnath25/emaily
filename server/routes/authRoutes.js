const passport = require('passport');

/* Google authenticate starts*/
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate ('google',{
      scope: ['profile','email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req,res) => {
      req.logout();
      res.send('logged out');
  })

  app.get('/api/current_user', (req,res) => {
    res.send(req.user);
  });

}
/*Google authenticate ends*/

/* Facebook authenticate starts
module.exports = app => {
  app.get(
    '/auth/facebook',
    Passport.authenticate ('facebook',{
      scope: ['email']
    })
  );

  app.get('/auth/facebook/callback', Passport.authenticate('facebook'));
};
 Facebook authenticate ends */
