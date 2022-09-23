/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { MongoClient } = require('mongodb');

const testRoute = express.Router();

testRoute.route('/').get((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('XDD Test router xd');
});

testRoute.route('/test').post((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const t = res.json(req.body);
  console.log(t);
});

testRoute.route('/con').post((req, res) => {
  const TEST_DATA = { testID: 'DSD', HEHE: 'NOT HEHE' };
  const url =
    'mongodb+srv://dbUser:Rj1bj2SPtF49tp12@portfoliocluster.ho0c2pt.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'Port';
  (async function () {
    let client;
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const response = await db
        .collection('testcollection')
        .insertOne(TEST_DATA);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  })();
});

module.exports = testRoute;
