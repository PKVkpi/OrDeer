const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const restarauntsRouter = require('./routes/restaraunts');
const usersRouter = require('./routes/users');
const session = require('express-session');
const passport = require('./config/passport');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewares/auth');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    resave: false
  }));
  
app.use(passport.initialize());
app.use(passport.session()); 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Connection with DB is successful");
});

app.use('/restaraunts', restarauntsRouter);
app.use('/users', authMiddleware.loginRequired, usersRouter);
app.use('/auth', authRouter(passport));


app.listen(port, () => console.log(`Listening on port ${port}`));