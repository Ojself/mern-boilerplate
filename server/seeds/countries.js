const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Country = require("../models/Country");

require("../configs/database");

const countries = [
  {
    name: "Egypt",
    capital: "Cairo",
    area: 1010000,
    desc: "Egypt, officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip (Palestine) and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the Red Sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt.",
  },
  {
    name: "Cuba",
    capital: "Havana",
    area: 109884,
    desc: "Cuba, officially the Republic of Cuba, is a country comprising the island of Cuba, as well as Isla de la Juventud and several minor archipelagos. Cuba is located where the northern Caribbean Sea, Gulf of Mexico, and Atlantic Ocean meet. It is east of the Yucatán Peninsula (Mexico), south of both the U.S. state of Florida and the Bahamas, west of Hispaniola, and north of both Jamaica and the Cayman Islands. Havana is the largest city and capital; other major cities include Santiago de Cuba and Camagüey. The official area of the Republic of Cuba is 109,884 km2 (42,426 sq mi) (without the territorial waters). The main island of Cuba is the largest island in Cuba and in the Caribbean, with an area of 104,556 km2 (40,369 sq mi). Cuba is the second-most populous country in the Caribbean after Haiti, with over 11 million inhabitants.",
  },
];
const seedCountries = async (clearDb) => {
  if (clearDb) {
    await Country.deleteMany();
  }
  const countriesCreated = await Country.create(countries);
  console.log(`${countriesCreated.length} countries created!`);
};
module.exports = { seedCountries };
