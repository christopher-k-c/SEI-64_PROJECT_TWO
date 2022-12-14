const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    name: String,
    brand: String,
    storage: String,
    description: String,
    quantity: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    
},
{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);



module.exports = {Product};



