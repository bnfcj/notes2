const Note = require("../models/note");
const isEmpty = require("../helpers/isEmpty.js");
function patchNote(request, response, next) {
  const id = request.params.id;
  const { important, content } = request.body;

  if (isEmpty(request.body)) {
    return next({ statusCode: 404, message: "Missing Input" });
  } else {
    Note.findByIdAndUpdate(
      id,
      { content, important },
      {
        new: true,
        runValidators: true,
        context: "query",
      }
    )
      .then((result) => {
        if (!result)
          return next({ statusCode: 404, message: "Note not found." });
        else {
          return response.status(200).json({ status: "success", data: result });
        }
      })
      .catch((error) => next(error));
  }
}

module.exports = patchNote;
