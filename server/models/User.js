/* eslint-disable func-names */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: {
      updatedAt: "updatedAt",
    },
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
