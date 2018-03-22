const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const ctrl = require('./controller');
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
require('dotenv').config()

const {
    REACT_APP_SUCCESS,
    REACT_APP_LOGOUT,
    SERVER_PORT,
    SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();

app.use(express.static( `${__dirname}/../build` ))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.findUser([profile.id]).then(user => {
        if(!user[0]) {
            db.createUser([profile.displayName, profile.id])
            .then(userCreated => {
                done(null, userCreated[0].user_id)
            })
        } else {
            done(null, user[0].user_id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id)
})
passport.deserializeUser((id, done) => {
    app.get('db').findSessionUser([id]).then(user => {
        done(null, user[0])
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: REACT_APP_SUCCESS
}))
app.get('/auth/logout', (req, res) => {
    req.logOut()
    res.redirect(REACT_APP_LOGOUT)
})


app.get('/api/dashnav', ctrl.getUsername)
app.get('/api/getScores', ctrl.getScores)
app.post('/api/postScore', ctrl.postScore)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))