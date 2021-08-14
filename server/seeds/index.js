const { seedAccounts } = require("./accounts");
const { seedCountries } = require("./countries");
const { seedUsers } = require("./users");

const mongoose = require("mongoose");

const seedAll = async (clearDb) => {
  try {
    await seedAccounts(clearDb);
    await seedCountries(clearDb);
    await seedUsers(clearDb);
    mongoose.disconnect();
  } catch (error) {
    mongoose.disconnect();
    throw error;
  }
};
seedAll(true);
