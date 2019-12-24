const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});


mongoose.Promise = global.Promise;
var dbName = "fetcher";

mongoose.connect(`mongodb://localhost/${dbName}`,{useMongoClient: true  } ,function(err,db){
      if(err) throw err;
      console.log(`database ${dbName} was created`);
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', ()=>{console.log('we are connected')});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  full_name: String

});

let Repo = mongoose.model('Repo', repoSchema);


let repoSche = new Repo({
  id:1,
  full_name:"name1"
});

repoSche.save();

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  Repo.save(repos);

  // Repo.save((err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   cb(null ,data);
  //document.save, instance, cb
}

module.exports.save = save;