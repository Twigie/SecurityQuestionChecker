require('dotenv').config()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
const TwitterStrategy = require('passport-twitter').Strategy

const {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  INSTAGRAM_APP_ID,
  INSTAGRAM_APP_SECRET,
  TWITTER_API_KEY,
  TWITTER_API_SECRET
} = process.env

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// passport.use(new InstagramStrategy({
//   clientID: INSTAGRAM_APP_ID,
//   clientSecret: INSTAGRAM_APP_SECRET,
//   callbackURL: 'http://localhost:5000/api/users/auth/instagram/callback'
// },
// (accessToken, refreshToken, profile, done) => {
//   console.log('profile: ', profile)

//   const newUser = { username: 'bran' }

//   done(null, newUser)
// }))


passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:5000/api/users/auth/facebook/callback'
},
function (accessToken, refreshToken, profile, cb) {
  fbUser = {
    'token': accessToken,
    'profile': profile
  }
  return cb(null, fbUser)
}))

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_API_KEY,
    consumerSecret: TWITTER_API_SECRET,
    callbackURL: 'http://localhost:5000/api/users/auth/twitter/callback'
},
function(token, tokenSecret, profile, done) {
  twUser = {
    'token': token,
    'id': profile.id,
    'profilePic': profile._json.profile_image_url
  }
  return done(null, twUser)
  }
))
