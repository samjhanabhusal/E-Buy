const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51KoK9RSFHLdvpCAHwv7sIIXpgHGVpsx9NEDLOIgTTheUBJNwTfipztawXgPkZ49Vg8zJfxTqI0ZjrJWBtai0LrSV00dQbvdLOT");
// Endpoints
router.post("/payment", (req, res) => {
  // stripe.charges.create(
    stripe.checkout.sessions.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
        // if stripe okay then sent response..->order , order-date shipping address, billing address
      }
    }
  );
});

module.exports = router;