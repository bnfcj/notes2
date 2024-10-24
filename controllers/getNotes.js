const Note = require("../models/note");
function getNotes(request, response, next) {
  Note.find()
    .then((result) => {
      return response.status(200).json({ status: "success", data: result });
    })
    .catch((error) => next(error));
}
module.exports = getNotes;
