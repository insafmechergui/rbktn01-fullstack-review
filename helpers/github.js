const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  return new Promise(function(resolve,reject){

    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };
    // TODO - Use the request module to request repos for a specific
    // user from the github API
    request.get(options, (err, response, body) => {
      if(err) {
        reject(err);
      }else {
        var array = JSON.parse(body);
        var result = [];
        for(var i = 0 ; i<array.length;i++){
          var obj={}
          obj.userName = userName
          obj.repoName = array[i].name
          obj.url      = array[i].html_url
          result.push(obj);
        }
        resolve(result)
      }

    })
    // The options object has been provided to help you out,
    // but you'll have to fill in the URL

  })
}


module.exports.getReposByUsername = getReposByUsername;