const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    name: String,
    description: String,
    phoneNumber: String,
    address: String,
    trading: Boolean,
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
},
{
    timestamps: true
})

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = {Supplier};