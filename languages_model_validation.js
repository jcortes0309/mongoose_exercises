// Add data validation to the programming language model. Making:
//
// * name required
// * date first appeared required
// * an inventor's name is required
// * at least one inventor is required (this will require some research :)
// * Try saving an object that doesn't meet the requirements. Do you get an error? Print out the detailed validation errors.
// * Save an object that does meet the requirements.
const mongoose = require("mongoose");
const bluebird = require("bluebird");
mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost/prog_langs");

const Language = mongoose.model("Language", {
  name: { type: String, required: true },
  website: String,
  dateFirstAppeared: { type: Date, required: true },
  inventors: {
    type: [{
      name: { type: String, required: true},
      website: String
    }],
    required: true
  },
  paradigms: [String],
  typingDiscipline: [String],
  dateCurrentRelease: Date,
  languagesInfluencedBy: [String]
});

var ruby = new Language({
  name: "Ruby",
  website: "https//ruby-lang/en/",
  dateFirstAppeared: 1995,
  inventors: [{
    name: "Yukihiro Matsumoto"
  }],
  paradigms: [
    "object-oriented",
    "imperative",
    "functional"
  ],
  typingDiscipline: [
    "duck",
    "dynamic",
    "strong"
  ]
});

ruby.save()
  .then(function(result) {
    console.log("Save success", result);
  })
  .catch(function(error) {
    console.log("Didn't save because: ", error.stack);
    console.log("Didn't save because: ", error.message);
    console.log("Detailed information : ", error.errors);
  });
