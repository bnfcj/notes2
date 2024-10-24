const Note = require("../models/note");
function getNote(request, response, next) {
  Note.findById(request.params.id)
    .then((result) => {
      if (result)
        return response.status(200).json({ status: "success", data: result });
      else {
        return next({ statusCode: 404, message: `Note not found.` });
      }
    })
    .catch((error) => next(error));
}
module.exports = getNote;
