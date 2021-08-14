const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const bcrypt = require("bcrypt");
const Account = require("../models/Account");

const bcryptSalt = 10;

require("../configs/database");

const accounts = [
  {
    email: "alice@mail.com",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    email: "bob@mail.com",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  },
];

const seedAccounts = async (clearDb) => {
  if (clearDb) {
    await Account.deleteMany({});
  }
  const accountsCreated = await Account.create(accounts);
  console.log(`${accountsCreated.length} accounts created!`);
};

module.exports = { seedAccounts };
