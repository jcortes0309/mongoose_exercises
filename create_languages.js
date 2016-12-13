// Using the programming language model you made in the first section, write a Node program to create a programming language in the DB.

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

var ruby = new Language({
  name: "Ruby",
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

var python = new Language();
python.name = "Python";
python.website = "www.python.org";
python.dateFirstAppeared = new Date("1991-02-20");
python.inventors.push({
  name: "Guido van Rossum",
  website: "gvanrossum.github.io"
});
python.paradigms = [
  "object-oriented",
  "imperative",
  "functional",
  "procedural",
  "reflective"
];
python.typingDiscipline.push("duck");
python.typingDiscipline.push("dynamic");
python.typingDiscipline.push("strong");
python.typingDiscipline.push("gradual");

python.save()
  .then(function(result) {
    console.log("Save success", result);
  })
  .catch(function(error) {
    console.log("Didn't save because: ", error.stack);
    console.log("Didn't save because: ", error.message);
    console.log("Detailed information : ", error.errors);
  });
