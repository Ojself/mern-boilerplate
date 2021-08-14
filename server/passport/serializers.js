const passport = require("passport");
const Account = require("../models/Account");

passport.serializeUser((loggedInAccount, cb) => {
  cb(null, loggedInAccount._id);
});

passport.deserializeUser(async (accountIdFromSession, cb) => {
  try {
    const account = await Account.findById(accountIdFromSession);
    cb(null, account);
  } catch (error) {
    cb(error);
  }
});
