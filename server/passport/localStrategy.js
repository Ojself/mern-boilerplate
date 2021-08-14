const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Account = require("../models/Account");

passport.use(
  new LocalStrategy(
    {
      emailField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const account = await Account.findOne({ email });

        if (!account) {
          done(null, false, { message: "Incorrect email" });
          return;
        }

        if (!bcrypt.compareSync(password, account.password)) {
          done(null, false, { message: "Incorrect password" });
          return;
        }
        done(null, account);
      } catch (error) {
        done(err);
      }
    }
  )
);
