/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieparseer = require('cookie-parser');
const session = require('express-session');

const app = express();

const testRoute = require('./routes/testroute');
const contactRoute = require('./routes/contactRoute');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../')));
app.use(cookieparseer());
app.use(session({ secret: 'hehe' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tp', testRoute);
app.use('/contact', contactRoute);

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log('hehe');
  res.send('HEheehe');
});

app.listen(5050);

// mongodb+srv://dbUser:<password>@portfoliocluster.ho0c2pt.mongodb.net/?retryWrites=true&w=majority
