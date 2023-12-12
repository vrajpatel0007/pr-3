const mongoose = require("mongoose");
const config = require("../config/config")

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.options)
        .then((data) => {
            console.log("Datebase connection successfully!");
        })
        .catch((error) => {
            console.log("Datebase connection error : ", error);
        })
}

module.exports = { connectDB };