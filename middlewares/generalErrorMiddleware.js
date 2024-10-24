function generalErrorMiddleware(error, request, response, next) {
  const statusCode = error.statusCode || 500;
  const message = error.message || "An unexpected error occurred.";
  return response.status(statusCode).json({
    status: "error",
    message: message,
  });
}
module.exports = generalErrorMiddleware;
