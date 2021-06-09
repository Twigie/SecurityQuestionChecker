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
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = process.env

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
async (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile)
}))

// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: 'http://localhost:5000/auth/twitter/callback'
// },
// function(token, tokenSecret, profile, done) {
//     // User.findOrCreate(..., function(err, user) {
//     //   if (err) { return done(err) }
//     //   done(null, user)
//     // })
//   }
// ))
