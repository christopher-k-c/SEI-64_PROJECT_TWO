const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    name: String,
    description: String,
    phoneNumber: String,
    address: String,
    email: String,
    website: String,
    trading: Boolean,
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
})

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = {Supplier};