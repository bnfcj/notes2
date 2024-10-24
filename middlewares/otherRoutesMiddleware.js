const otherRoutesMiddleware = (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "Route not found. Please check your URL.",
  });
};
module.exports = otherRoutesMiddleware;
