// 5. Write a program to find a programming language by its name, then print out its object ID.

const mongoose = require("mongoose");
const bluebird = require("bluebird");
mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost/prog_langs");

const Language = mongoose.model("Language", {
  name: String,
  website: String,
  dateFirstAppeared: Date,
  inventors: [{
    name: String,
    website: String
  }],
  paradigms: [String],
  typingDiscipline: [String],
  dateCurrentRelease: Date,
  languagesInfluencedBy: [String]
});

// JSON.stringify will show the objects inside the inventors
Language.find({ name: "Python"})
  .then(function(docs) {
    console.log("\n\nHere is the information you requested\n\n", JSON.stringify(docs[0]._id));
  });

// Language.findById("58503576708b6a5d21efeb3a")
//   .then(function(information) {
//     console.log("The information for id 58503576708b6a5d21efeb3a is: ", information);
//   });
