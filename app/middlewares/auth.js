module.exports = (req, res, next) => {
  req.userId = "user";
  next();
};
