const express = require("express");
const passport = require("passport");
const router = express.Router();
/* const User = require("../models/User"); */
const Account = require("../models/Account");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const { check, validationResult } = require("express-validator");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const accountId = req.account.id;
    const account = await Account.findById(accountId).select("-password");
    res.json(account);
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.post(
  "/signup",
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ w });
    }

    const { email, password } = req.body;
    try {
      const account = await Account.findOne({ email });
      if (account) {
        return res.status(409).json({ message: "The email already exists" });
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newAccount = new Account({ email, password: hashPass });
      const accountSaved = await newAccount.save();
      req.login(accountSaved, () => {
        accountSaved.password = null;
        res.status(201).json(accountSaved);
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors });
    }
    const { email, password } = req.body;

    try {
      const account = await Account.findOne({ email });

      if (!account) {
        next(new Error("Invalid credentials"));
        return;
      }
      const isMatch = bcrypt.compareSync(password, account.password);
      if (!isMatch) {
        next(new Error("Invalid credentials"));
        return;
      }
      req.logIn(account, () => {
        account.password = undefined;
        res.json(account);
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login-with-passport-local-strategy", (req, res, next) => {
  passport.authenticate("local", (err, account, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    if (!account) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(account, (err) => {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
        return;
      }
      res.json(req.user);
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "You are out!" });
});

module.exports = router;
