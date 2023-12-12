const { mobile } = require("../models");

/**
 * Get mobile details
 * @param {ObjectId} mobileId
 * @returns {Promise<mobile>}
 */

const getmobileList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return mobile.find(filter).limit(Number(options.limit)).skip(Number(skip));
};


const createmobile = async (reqBody) => {
  return mobile.create(reqBody);
};


const updatemobile = async (mobileId, reqBody) => {
  return mobile.findOneAndUpdate(
    { _id: mobileId },
    { $set: reqBody },
    { new: true }
  );
};



const deletemobile = async (mobileId) => {
  return mobile.findOneAndDelete({ _id: mobileId });
};
const getmobileById = async (mobileId) => {
  return mobile.findOne({ _id: mobileId });
};

module.exports = {
  getmobileList,
  createmobile,
  updatemobile,
  deletemobile,
  getmobileById
};