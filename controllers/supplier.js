const {Supplier} = require("../models/Supplier");
const moment = require('moment');




// Create //
exports.supplier_create_get = (req, res) => {
    res.render("supplier/add");
};

exports.supplier_create_post = (req, res) => {
    console.log(req.body);
    
    let supplier = new Supplier(req.body);

    supplier.save()
    .then(()=> {
        res.redirect("/supplier/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Missing required field");
    })
};

// Index list //
exports.supplier_index_get = (req, res) => {

    Supplier.find()
    .then(suppliers => {
        res.render("supplier/index", {suppliers: suppliers, moment}) 
    })
    .catch(err => {
        console.log(err);
    })
};


exports.supplier_show_get = (req, res) => {
    console.log(req.query.id);

    Supplier.findById(req.query.id).populate('product')
    .then(supplier => {
        res.render("supplier/detail", {supplier, moment});
    })
    .catch(err => {
        console.log(err);
    })
};

// Delete //
exports.supplier_delete_get = (req, res) => {
    console.log(req.query.id);
    Supplier.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/supplier/index");
    })
    .catch(err => {
        console.log(err);
    })
};

// Update //
exports.supplier_edit_get = (req, res) => {

    Supplier.findById(req.query.id)
    .then((supplier) => {
        res.render("supplier/edit", {supplier})
    })
    .catch(err => {
        console.log(err)
    })
};

exports.supplier_update_put = (req, res) =>{
    console.log(req.body.id)
    Supplier.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/supplier/index");
    })
    .catch(err => {
        console.log(err)
    })
};