const {Product} = require('../models/Product');
const {Supplier} = require('../models/Supplier');
const moment = require('moment');
const isLoggedIn = require("../helper/isLoggedIn");



// Create //
exports.product_create_get = (req, res) => {
    
    Supplier.find()
    .then((suppliers) => {
        res.render("product/add", {suppliers})
    })
    .catch(err => {
        console.log(err);
    })
};


exports.product_create_post = (req, res) => {
    console.log(req.body);

    let product = new Product(req.body);

    product.save()
    .then(() => {

        Supplier.findById(req.body.supplier, (error, supplier) => {
            supplier.product.push(product);
            supplier.save();
        })
      

        res.redirect('/product/index');
    })
    .catch((err) => {
        console.log(err);
        res.send('Missing field, try again');
    })
}

// Index list //
exports.product_index_get = (req, res) => {

    Product.find()
    .then(products => {
        res.render('product/index', {products: products, moment})
    })
    .catch(err => {
        console.log(err);
    })
};

// Show Detail //

exports.product_show_get = (req, res) => {
    console.log(req.query.id)

    Product.findById(req.query.id).populate('supplier')
    .then(product => {
        res.render('product/detail', {product, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// Delete //
exports.product_delete_get = (req, res) => {
    console.log(req.query.id)

    Product.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect('/product/index');
    })
    .catch(err => {
        console.log(err);
    })
};

// Update //
exports.product_edit_get = (req, res) => {
 
    Product.findById(req.query.id)
    .then((product) => {
        res.render("product/edit", {product})
    })
    .catch(err => {
        console.log(err)
    })
 }
 exports.product_update_put = (req, res) =>{
    console.log(req.body.id)
    Product.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/product/index")
    })
    .catch(err => {
        console.log(err)
    })
 }
 