const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;


function service(app) {

  passport.use(new FacebookStrategy({
    clientID: app.config.logInFacebook.clientID,
    clientSecret: app.config.logInFacebook.clientSecret,
    callbackURL: app.config.logInFacebook.callbackURL
  },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile)

      const account = await app.database.getOrCreateAccount({
        facebookID: profile.id,
        name: profile._json.name,
        photo: profile._json.picture
      })
      console.log(account)
      return cb(null, true);

    }
  ));



  app.http.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.http.get('/auth/facebook/loggedin',
    passport.authenticate('facebook', { session: false, failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
}

module.exports = service
