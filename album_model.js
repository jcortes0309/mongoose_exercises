// 2. Construct a Mongoose model for an album

const mongoose = require("mongoose");
const bluebird = require("bluebird");
mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost/albums");

// 2. Construct a Mongoose model for an album

const Album = mongoose.model("Album", {
  name: String,
  artist: String,
  released: Date,
  tracks: [{
    name: String,
    songWriters: [String],
    duration: Number
  }],
  personnel: [{
    name: String,
    instrument: String
  }]
});
