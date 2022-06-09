const express = require('express');

var methodOverride = require('method-override')

const router = express.Router();

const isLoggedIn = require("../helper/isLoggedIn");

router.use(methodOverride('_method'));

router.use(express.urlencoded({extended: true}));

const supplierCtrl = require("../controllers/supplier");

router.get("/supplier/add", isLoggedIn, supplierCtrl.supplier_create_get);
router.post("/supplier/add", isLoggedIn, supplierCtrl.supplier_create_post);
router.get("/supplier/index", isLoggedIn, supplierCtrl.supplier_index_get);
router.get("/supplier/detail", isLoggedIn, supplierCtrl.supplier_show_get);
router.get("/supplier/delete", isLoggedIn, supplierCtrl.supplier_delete_get);
router.get("/supplier/edit", isLoggedIn, supplierCtrl.supplier_edit_get);
router.put("/supplier/update", isLoggedIn, supplierCtrl.supplier_update_put);

module.exports = router;