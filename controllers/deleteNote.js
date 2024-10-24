const Note = require("../models/note");

function deleteNote(request, response, next) {
  const id = request.params.id;
  Note.findByIdAndDelete(id)
    .then((result) => {
      if (!result) return next({ statusCode: 404, message: "Note not found" });
      else {
        return response
          .status(200)
          .json({ status: "success", message: "Deleted note" });
      }
    })
    .catch((error) => next(error));
}
module.exports = deleteNote;
