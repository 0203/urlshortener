const mongoose = require("mongoose");
const schema = mongoose.Schema;

const urlSchema = new Schema({
  originalUrl: String,
  shorterUrl: String
}, {timestamp:true});

