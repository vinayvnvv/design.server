module.exports = (req, res, next) => {
  req.userId = "user";
  setTimeout(() => {
    next();
  }, 300);
};
