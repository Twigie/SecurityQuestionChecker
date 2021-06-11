require('dotenv').config()

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const redis = require('redis')
const cors = require('cors')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()


const app = express()
const port = process.env.PORT || 5000
const userRoute = require('./routes/users')
const scannerRoute = require('./routes/scanners')

app.use(express.static('../frontend/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    key: 'userID',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true
    },
    store: new RedisStore({ client: redisClient })
}))

app.use(cors({
  "origin": ['http://localhost:8080'],
  'credentials': true,
  'methods': ['OPTIONS', 'GET', 'POST']
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/users', userRoute)

app.use('/api/scanner', scannerRoute)



app.listen(port, () => console.log(`Server started on ${port}`))


