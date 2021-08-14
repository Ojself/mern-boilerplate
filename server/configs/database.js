const mongoose = require("mongoose");

const uri =
  process.env.MONGODB_URI ||
  "mongodb://localhost/please-set-process-env-mongodb-uri";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) =>
    console.info(
      `Connected to MongoDB! Database name: "${db.connections[0].name}"`
    )
  )
  .catch((err) => console.error("Error connecting to mongo", err));
mongoose.set("useCreateIndex", true);
