/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { MongoClient } = require('mongodb');

const contactRoute = express.Router();

contactRoute.route('/').post((req, res) => {
  console.log('accessed xD');
  res.header('Access-Control-Allow-Origin', '*');
  const { email, name, regarding, message } = req.body;
  const url =
    'mongodb+srv://dbUser:Rj1bj2SPtF49tp12@portfoliocluster.ho0c2pt.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'Port';
  (async function () {
    let client;
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const contactData = { name, email, regarding, message };
      const response = await db.collection('contact').insertOne(contactData);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  })();
});

module.exports = contactRoute;
