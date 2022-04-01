const mongoose = require("mongoose");//return SIngleton Object..
// It create an instance of Mongooose calss and returning it.
// 

const CartSchema = new mongoose.Schema(
  {
    //   every user has one cart..
    userId: { type: String, required: true },
    // can be more than one product
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
          // user can decrease and increase this no
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
// A model in a class with which we construct documents.Here..Each document is Cart with Poperties
// adn behavious as decleared in our schema


// Each document can be saved to the database by calling save methof.
// We can access all the Cart documents through Cart model