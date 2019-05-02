const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  key: {type: Number },
  name: { type: String },
  location: { type: String },
  date: { type: String },
  img: { type: String }

  // comments: [{
  //   comment: { type: String }, 
  //   time: {type: Date, default: Date.now }, 
  //   username: {type: String}
  // }],

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
