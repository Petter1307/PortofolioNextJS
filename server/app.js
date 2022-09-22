/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hehe');
  res.send('HEheehe');
});

app.listen(3333);
