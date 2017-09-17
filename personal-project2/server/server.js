const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const ec = require('../controllers/events_controller');
const uc = require('../controllers/users_controller');
const strategy = require('./strategy');
const passport = require('passport');
const config = require('../config');


const app = express();
app.use(bodyParser.json());
app.use(cors());


massive(config.dblink).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(err)
})
console.log(app.get('db'))

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.sessionsecret,
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser(function (user, done) {
    // console.log(user);
    var userInfo = {
        id: user.id,
        displayName: user.displayName,
        nickname: user.nickname,
        email: user.email,
        picture: user.picture
    }
    done(null, userInfo)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

//auth0 endpoints
app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/',
    failureFlash: true
}))

app.get('/me', function (req, res, next) {
    console.log(req.user)
    if(!req.user){
        return res.status(404).send('User not found')
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/#/');
})



// events endpoints using events_controller

app.post('/api/event', ec.createEvent);
app.get('/api/events', ec.getEvents);
app.get('/api/events/:id', ec.getEventById);
// app.get(`/api/events?category=${#}`, ec.getEventsByCat)
// app.get(`/api/events?zipcode=${#}`, ec.getEventsByZip)
app.delete('/api/event/:id', ec.deleteEvent);

//user endpoints using users_controller

//app.post('/api/user', uc.createProfile) - but how does this work with Auth0?
app.get('/api/user/:id', uc.getProfile);
app.put('/api/user/:id', uc.updateProfile);

const port = 3001;
app.listen(port, () => { console.log(`Listening on port ${port}`) });