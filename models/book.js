const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, requred: true },
  isbn: { type: String, requred: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

BookSchema.virtual("url").get(function () {
  return `/catalog/book/${this.id}`;
});

module.exports = mongoose.model("book", BookSchema);
