// 3. Write a program to find a programming language by its name.

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

Language.findOne({ name: "Ruby"})
  .then(function(language) {
    console.log("\nHere is the information you requested\n", language);
    language.website = "https://www.ruby-lang.org/";
    language.save()
      .then(function(result) {
        console.log("\nSave success", result);
      })
      .catch(function(error) {
        console.log("Didn't save because: ", error.stack);
        console.log("Didn't save because: ", error.message);
        console.log("Detailed information : ", error.errors);
      });
  });
