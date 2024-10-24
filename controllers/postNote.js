const Note = require("../models/note");
function postNote(request, response, next) {
  const { content, important } = request.body;
  if (!content) {
    next({ statusCode: 404, message: `Missing Input` });
  } else {
    const note = new Note({ content, important });
    note
      .save()
      .then((result) => {
        return response.status(201).json({ status: "success", data: result });
      })
      .catch((error) => next(error));
  }
}
module.exports = postNote;
