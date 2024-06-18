const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { 
        type: String
    },
    description: { 
        type: String 
    },
    price: { 
        type: Number
    },
    quantity: { 
        type: Number
    },
    category: { 
        type: String 
    },
});

module.exports = mongoose.model("PRODUCTS", productSchema);