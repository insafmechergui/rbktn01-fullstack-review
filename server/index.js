const express = require('express');
let app = express();
const save = require('../database/index.js');
let getReposByUsername = require('../helpers/github.js').getReposByUsername;
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  //console.log(req.body.term);
  getReposByUsername(req.body.username);
  // TODO - your code here!
  // This route should take the github username provided
  //req.body.username
  // and get the repo information from the github API, then
  // save the repo information in the database
  db.findRepo(username)
  .then((data)=>{
    return new Promise((resolve,reject)=>{
      if(data.length===0){
        resolve(data)
      }else{
         res.send(data);
      }
    })
  })
  .then((data)=>{
    return helper.getReposByUsername(username)
  })
  .then((repos)=>{
    return db.saveAll(repos);
  })
  .then((repos)=>{
      res.send(repos.ops)
  })
  .catch((err)=>{
    console.log("err",err)
    //res.send("server error")
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
    db.findRepo()
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    console.log("err get data ",err)
    res.send([]);
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

