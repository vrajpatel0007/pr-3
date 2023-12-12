const mongoose = require("mongoose");
const config = require("../config/config");


const mobileSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            trim: true
          },
        mobile_name: {
            type: String,
            trim: true,
        },
        mobile_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const mobile = mongoose.model("prodct", mobileSchema);
module.exports = mobile;