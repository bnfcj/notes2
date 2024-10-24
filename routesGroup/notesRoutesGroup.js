const getNotes = require("../controllers/getNotes");
const getNote = require("../controllers/getNote");
const postNote = require("../controllers/postNote");
const patchNote = require("../controllers/patchNote");
const deleteNote = require("../controllers/deleteNote");
const notesRoute = "/api/notes";
function notesRoutesGroup(app) {
  app.get(`${notesRoute}`, getNotes);
  app.get(`${notesRoute}/:id`, getNote);
  app.post(`${notesRoute}`, postNote);
  app.patch(`${notesRoute}/:id`, patchNote);
  app.delete(`${notesRoute}/:id`, deleteNote);
}
module.exports = notesRoutesGroup;
