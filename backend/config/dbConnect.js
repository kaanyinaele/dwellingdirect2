const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database error", err);
  }
};
module.exports = dbConnect;
