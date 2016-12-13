// 2. Write a program to find all programming languages in the collection.

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
Language.find({})
  .then(function(docs) {
    console.log("\n\nHere are all documents in the database", JSON.stringify(docs));
  });

// Without JSON.stringify it will show [Object] for inventors.  This is because this object is "too deep" in the model
Language.find({})
  .then(function(docs) {
    console.log("\n\nHere are all documents in the database", docs);
  });
