var mongodb = require('mongodb');
var movies = require('./movies');
var interface = require('./interface');
var connect = require('./connect');


var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  db.collection('movies').insert({ x: 1 }, function(error, result) {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    db.collection('movies').find().toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
