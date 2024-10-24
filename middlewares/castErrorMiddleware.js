function castErrorMiddleware(error, request, response, next) {
  if (error.name === "CastError") {
    return response.status(400).json({
      status: "error",
      message:
        "Invalid input format. Please ensure the ID is valid and all properties meet the expected format.",
    });
  }
  next(error); // Pass to the next error handler if it's not a CastError
}
module.exports = castErrorMiddleware;
