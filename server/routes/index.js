const express = require("express");
const router = express.Router();

router.get("/ping", (req, res, next) => {
  res.status(200).json({
    sucess: true,
    message: `pong ${new Date()}`,
  });
});

module.exports = router;
