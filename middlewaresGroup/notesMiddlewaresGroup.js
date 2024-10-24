// Import Error middleware
const castErrorMiddleware = require("../middlewares/castErrorMiddleware");
const validationErrorMiddleware = require("../middlewares/validationErrorMiddleware");
const generalErrorMiddleware = require("../middlewares/generalErrorMiddleware");
const otherRoutesMiddleware = require("../middlewares/otherRoutesMiddleware");
function notesMiddlewaresGroup(app) {
  app.use(castErrorMiddleware);
  app.use(validationErrorMiddleware);
  app.use(generalErrorMiddleware);
  app.use(otherRoutesMiddleware);
}
module.exports = notesMiddlewaresGroup;
