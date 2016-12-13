// 1. Construct a Mongoose model for a programming language that contains a name, website, date it first appeared, programming paradigms, typing discipline, inventors, the date of the current release, and the names of other languages it was influenced by.

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
