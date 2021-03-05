const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_USElDE8EwbJAT9zNjBL2t1iP00QLeXAcG4");

// Setup API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
// http://127.0.0.1:5001/challenge-62d91/us-central1/api