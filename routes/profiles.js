

const router = require('express').Router();

const isLoggedIn = require("../helper/isLoggedIn");
// AUTH ROUTES
const profileCtrl = require("../controllers/profile");
router.get("/profile/index", isLoggedIn, profileCtrl.profile_index_get);
router.get("/profile/edit", isLoggedIn, profileCtrl.profile_edit_get);
router.put("/profile/update", isLoggedIn, profileCtrl.profile_edit_put);
router.get("/profile/users", isLoggedIn, profileCtrl.help_get);
router.get("/profile/editUser", isLoggedIn, profileCtrl.profile_edituser_get);
router.put("/profile/updateUser", isLoggedIn, profileCtrl.profile_updateuser_put);
router.get("/profile/delete", isLoggedIn, profileCtrl.profile_users_delete);




module.exports = router;