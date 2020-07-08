const cors = require("cors");
const express = require("express");
const uuid = require("uuid/v4");
const bodyParser = require('body-parser');
const sendGrid = require('@sendGrid/mail');
const app = express();
app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

require('dotenv').config()
const sendgridkey = process.env.SENDGRID_KEY;

app.post('/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey(`${sendgridkey}`);
    const msg = {
        to: 'kaloian4obg99@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    };

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(`${STRIPE_SECRET_KEY}`);

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "BGN",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});

app.post("/checkout2",async (req,res) =>{

    const { token } = req.body;

    const charge = await stripe.charges.create({
        amount: 2000,
        currency: 'BGN',
        description: 'Тунел',
        source: token,
    })
});

app.listen(8080);