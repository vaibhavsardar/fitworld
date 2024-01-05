const express = require('express');
const { registerUser, loginUser, ShowUser, getUser, logout, admingetUser, enroll, getUserForm, getallEroll, addUserinteckform, getAllinteckforms, getUserDetails, getUserProgram, adddailytraking, addweeklytraking, getprogramcontent } = require('../controller/userController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
// router.route("/showuser").get(authenticate,ShowUser);

router.route("/getuser").get(authenticate,getUser);  //get logedin user
router.route("/admingetuser").post(admingetUser);  //get user by passing id
router.route("/admin/user/:id").get(getUserDetails);  //get user by passing id


router.route("/enroll").post(authenticate,enroll);
router.route("/getallenroll").get(getallEroll);
router.route("/getuserprogram").get(authenticate,getUserProgram); //get user by passing id

router.route("/getprogramcontent").post(getprogramcontent);

router.route("/inteckform").post(authenticate,addUserinteckform);
router.route("/getintekfrom").post(getUserForm);  //get one user intekform by passing user id
router.route("/getuserformdata").get(getAllinteckforms);


router.route("/adddailytraking").post(authenticate,adddailytraking);
router.route("/addweeklytraking").post(authenticate,addweeklytraking);
module.exports = router;