const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Account = require("../models/Account");
const User = require("../models/User");

require("../configs/database");

const users = [
  {
    username: "alice",
    account: null,
  },
  {
    username: "bob",
    account: null,
  },
];

const seedUsers = async (clearDb) => {
  if (clearDb) {
    await User.deleteMany({});
  }
  const accounts = await Account.find({});
  users.map((user, i) => (user.account = accounts[i]._id));
  const usersCreated = await User.create(users);
  console.log(`${usersCreated.length} users created!`);
};
module.exports = { seedUsers };
