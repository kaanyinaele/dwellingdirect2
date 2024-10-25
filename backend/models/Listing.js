const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    propertyTitle: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    water: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
    power: {
      type: Boolean,
      default: false,
    },
    rentType: {
      type: String,
      enum: ["yearly", "monthly"],
      required: true,
    },
    rentPrice: {
      type: String,
      required: true,
    },
    agencyPrice: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String, // Assuming you'll store URLs to Cloudinary or AWS S3
      },
    ],
    video: {
      type: String, // Assuming you'll store a URL for the video
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
