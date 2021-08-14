/* eslint-disable no-console */
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const nocache = require("nocache");
const rateLimit = require("express-rate-limit");
const createError = require("http-errors");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
});

const app = express();
require("./configs/database");

/* app.use('/api/', apiLimiter); */
app.use(nocache());

const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.PRODUCTION_URL; /* Your domain here */
app.use(
  cors({
    optionsSuccessStatus: 200,
    credentials: true,
    origin,
  })
);

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("trust proxy", true);

// Set the public folder to "~/client/build/"
app.use(express.static(path.join(__dirname, "../client/build")));

// Enable authentication using session + passport
app.use(
  session({
    name: "Name",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    },
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  })
);
require("./passport")(app);

/* Routes */
app.use("/api", require("./routes/index"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/countries", require("./routes/countries"));

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use("/api/*", (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(createError(err));
});

// For any other routes, redirect to the index.html file of React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use((err, req, res, next) => {
  console.log("----- An error happened -----");
  console.log(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else {
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
    }
  }
});

module.exports = app;
