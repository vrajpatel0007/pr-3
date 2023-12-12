const express = require("express");
const uservalidation = require("../../validations/user.validtion")
const usercontroller = require("../../controllers/user.controller")
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/create-user",
  usercontroller.createUser
)

/** Get user list */
router.get(
  "/list",
  usercontroller.getUserList
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  usercontroller.deleteUser
);
router.put(
  "/update-details/:userId",
  validate(uservalidation.updateDetails),
  usercontroller.updateDetails
);


module.exports = router;