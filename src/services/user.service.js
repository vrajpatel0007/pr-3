const User = require("../models/User.modale");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};
const getUserList = async (filter, options) => {
  return User.find()
};
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>}
 */
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

module.exports = {
  createUser,
  getUserList,
  deleteUser,
  updateDetails,
  getUserById
};