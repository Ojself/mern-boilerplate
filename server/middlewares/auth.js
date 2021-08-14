function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next();
  else next({ status: 401, message: "Unauthorized" });
}

module.exports = {
  isLoggedIn,
};
