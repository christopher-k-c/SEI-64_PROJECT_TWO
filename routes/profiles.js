

const router = require('express').Router();


// AUTH ROUTES
const profileCtrl = require("../controllers/profile");
// router.get("/profile/index", profileCtrl.profile_index_get);
router.get("/profile/index", profileCtrl.profile_index_get);


module.exports = router;