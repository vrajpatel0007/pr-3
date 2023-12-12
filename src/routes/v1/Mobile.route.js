const express = require("express");
const validate = require("../../middlewares/validate");
const mobileValidation  = require("../../validations/Mobile.validation");
const  mobileController  = require("../../controllers/Mobile.controller");

const router = express.Router();

/** Create mobile */
router.post(
  "/create",

  validate(mobileValidation.createmobile),
  mobileController.createmobile
);


/** Get mobileion list */
router.get(
  "/list",
  validate(mobileValidation.getList),
  mobileController.getmobileList
);

/** Update mobile details */
router.put(
  "/update/:mobileId",
  validate(mobileValidation.updatemobile),
  mobileController.updatemobile
);


/** Delete mobile */
router.delete(
  "/delete/:mobileId",
  mobileController.deletemobile
);

module.exports = router;