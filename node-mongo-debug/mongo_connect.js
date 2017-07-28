// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db - in the other container via
// dns name 
MongoClient.connect("mongodb://mymongo:27017/exampleDb", function(err, db) {
  if(!err) console.log("We are connected");

   console.log('err = ' + err);
  
});
