function validationErrorMiddleware(error, request, response, next) {
  if (error.name === "ValidationError") {
    return response.status(422).json({
      status: "error",
      message: "Validation failed. Please check your input.",
    });
  }
  next(error); // Pass to the next error handler if it's not a ValidationError
}
module.exports = validationErrorMiddleware;
