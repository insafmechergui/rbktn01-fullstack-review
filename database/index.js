const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  full_name: String,
  owner: {
    login: String,
    url :String
  }

});

let Repo = mongoose.model('Repo', repoSchema);

let repoSche = new Repo;

let save = (err, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // Repo.save((err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   cb(null ,data);
  }); //document.save, instance, cb
}

module.exports.save = save;