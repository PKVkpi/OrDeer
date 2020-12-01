const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const restarauntsRouter = require('./routes/restaraunts');
const usersRouter = require('./routes/users')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Connection with DB is successful");
});

app.use('/restaraunts', restarauntsRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));