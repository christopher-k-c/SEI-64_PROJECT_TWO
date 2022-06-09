const {Product} = require('../models/Product');
const {Supplier} = require('../models/Supplier');
const {User} = require('../models/User');

const moment = require('moment');
const isLoggedIn = require("../helper/isLoggedIn");

const storageOpt = ["Cupboard", "Fridge", "Freezer", "Other"];

// Create //
exports.product_create_get = (req, res, next) => {
    
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
        });

        // User.findById(req.body.user, (error, user) => {
        //     user.product.push(product);
        //     user.save();
        // });
      

        res.redirect('/product/index');
    })
    .catch((err) => {
        console.log(err);
        res.send('Missing field, try again');
    })

    console.log(req.user)

    console.log(req.user.id)
}

// Index list //
exports.product_index_get = (req, res) => {
    
    Product.find({}, null).populate('supplier')
    .then(products => {
        let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js", "/script/dashChart.js"]
        res.render('product/index', {products: products, scripts: scripts, moment})
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
    let promises = [
        Product.findById(req.query.id).populate("supplier"),
        Supplier.find()
    ]
 
    Promise.all(promises)
    .then((values) => {
        res.render("product/edit", {product: values[0], suppliers: values[1], storage: storageOpt})
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
 };

 // Charts for index //

exports.product_chart_get = (req, res) => {
    

    Product.aggregate([
        {
            $group: {
                _id: { $dateToString: {format: "%Y-%m-%d", date: "$updatedAt" } },
                totalInflux: { $sum: "$quantity"}
            }
        },
        { "$sort": { "_id": 1}}
    ])
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        console.log(err);
    })
};
 
