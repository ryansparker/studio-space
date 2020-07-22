const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

function service(app) {

    passport.use(new GoogleStrategy({
        clientID: app.config.logInGoogle.clientID,
        clientSecret: app.config.logInGoogle.clientSecret,
        callbackURL: app.config.logInGoogle.callbackURL
    },
        async function (accessToken, refreshToken, profile, cb) {
            console.log(profile)    
            const account = await app.database.getOrCreateAccount({
                googleID: profile.id,
                name: profile._json.name,
                photo: profile._json.picture
            })
            console.log(account)
            return cb(null, true)
           
        }
    ));

    app.http.get('/auth/google',
        passport.authenticate('google', { scope: ['profile'] }));

    app.http.get('/auth/google/loggedin',
        passport.authenticate('google', { session: false, failureRedirect: '/login' }),
        function (req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
}

module.exports = service
