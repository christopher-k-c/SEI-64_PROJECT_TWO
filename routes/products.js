const express = require('express');

// var methodOverride = require('method-override')

const router = express.Router();

const isLoggedIn = require("../helper/isLoggedIn");

// router.use(methodOverride('_method'));

router.use(express.urlencoded({extended: true}));

const productCtrl = require('../controllers/product');



router.get('/product/add', isLoggedIn, productCtrl.product_create_get);
router.post('/product/add', productCtrl.product_create_post);
router.get('/product/index', productCtrl.product_index_get);
router.get('/product/detail', productCtrl.product_show_get);
router.get('/product/delete', isLoggedIn, productCtrl.product_delete_get);
router.get('/product/edit', isLoggedIn, productCtrl.product_edit_get);
router.put('/product/update', productCtrl.product_update_put);


module.exports = router;

