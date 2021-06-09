require('dotenv').config()

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const redis = require('redis')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()

const app = express()
const port = process.env.PORT || 5000
const userRoute = require('./routes/users/users')

app.use(express.static('../frontend/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    key: 'userID',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    },
    store: new RedisStore({ client: redisClient })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/users', userRoute)

app.get('/test', function(req, res, next) {
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
    }
  })



app.listen(port, () => console.log(`Server started on ${port}`))


