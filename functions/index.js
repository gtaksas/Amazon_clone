const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    '' //STRIPE API KEY DELETED 
    );

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>',
    total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "eur",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// (http://localhost:5001/ace-1880a/us-central1/api)