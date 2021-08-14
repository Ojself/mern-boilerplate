/* eslint-disable func-names */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      updatedAt: "updatedAt",
    },
  }
);
const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
