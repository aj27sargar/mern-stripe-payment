const express = require("express");
const Stripe = require("stripe");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-payment-link", async (req, res) => {
  try {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "Test Product" },
            unit_amount: 50000, // ₹500.00
          },
          quantity: 1,
        },
      ],
    });

    res.json({ url: paymentLink.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
