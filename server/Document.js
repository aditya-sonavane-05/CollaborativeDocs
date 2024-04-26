const { Schema, model } = require("mongoose")

const Document = new Schema({
  _id: String,
  data: Object,
})

module.exports = model("Document", Document)


/*

This code defines a MongoDB schema using Mongoose for a "Document" model with two fields:

_id: A string representing the unique identifier of the document.
data: An object containing the data of the document.
The purpose is to structure and model document data in a MongoDB database using Mongoose, allowing for easy creation, retrieval, updating, and deletion of documents.
*/