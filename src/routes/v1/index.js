const express = require("express");
const userRoute = require("./user.route");
const mobile = require("./mobile.route")

const router = express.Router();

router.use("/user", userRoute);
router.use("/mobile", mobile)
module.exports = router;