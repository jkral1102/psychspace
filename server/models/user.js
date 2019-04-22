const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  key: {type: Number },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
