const fs = require("fs");
const { mobileService } = require("../services");

/** Create mobile */
const createmobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const createdmobile = await mobileService.createmobile(reqBody);

    res.status(200).json({
      success: true,
      message: "mobile create successfully!",
      data: createdmobile,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};



/** Get prooduct list */
const getmobileList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.mobile_name = { $regex: search, $options: "i" };
    }

    const getList = await mobileService.getmobileList(filter, options);

    res.status(200).json({
      success: true,
      data: getList,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Update mobile details */
const updatemobile = async (req, res) => {
  try {
    const reqBody = req.body;
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getmobileById(mobileId);
    if (!mobileExists) {
      throw new Error("mobile not found!");
    }

    if (req.file) {
      reqBody.mobile_imag = req.file.filename;
    }

    const updatedmobile = await mobileService.updatemobile(
      mobileId,
      reqBody
    );
    if (updatedmobile) {
      if (req.file) {
        const filePath = `./public/mobile_images/${mobileExists.mobile_imag}`;
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    } else {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "mobile details update successfully!",
      data: updatedmobile,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};



/** Delete mobile */
const deletemobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getmobileById(mobileId);
    if (!mobileExists) {
      throw new Error("mobile not found!");
    }

    const deletedmobile = await mobileService.deletemobile(mobileId);
    if (deletedmobile) {
      const filePath = `./public/mobile_images/${mobileExists.mobile_imag}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } else {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "mobile delete successfully!",
      data: deletedmobile,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

module.exports = {
  createmobile,
  getmobileList,
  updatemobile,
  deletemobile,
};