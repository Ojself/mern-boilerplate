const passport = require("passport");

require("./serializers");
require("./localStrategy");

module.exports = (app) => {
  app.use(passport.initialize({ userProperty: "account" })); // account object is now available in req.account
  app.use(passport.session());
};
