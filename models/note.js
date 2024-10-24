// URL for Mongodb
const url = process.env.MONGODB_URI;

// Setup Mongoose Connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const noteSchema = mongoose.Schema({
  content: { type: String, required: true },
  important: { type: Boolean, default: true },
});

noteSchema.set("toJSON", {
  transform: (_, returned) => {
    returned.id = returned._id.toString();
    delete returned._id;
    delete returned.__v;
  },
});

mongoose.connect(url);
module.exports = mongoose.model("Note", noteSchema);
