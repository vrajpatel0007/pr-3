const Joi = require("joi");

/** Create mobile */
const createmobile = {
  body: Joi.object({
    brand: Joi.string().trim().optional(),
    mobile_name: Joi.string().required().trim(),
    mobile_desc: Joi.string().optional(),
    price: Joi.number().required(),
  }),
};


/** Get mobileion list */
const getList = {
  query: Joi.object({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Update mobile details */
const updatemobile = {
  params: Joi.object({
    mobileId: Joi.string().required().trim(),
  }),
  body: Joi.object({
    brand: Joi.string().trim().optional(),
    mobile_name: Joi.string().trim().optional(),
    mobile_desc: Joi.string().optional(),
    price: Joi.number().optional(),
  }),
};

module.exports = {
  createmobile,
  getList,
  updatemobile,
};