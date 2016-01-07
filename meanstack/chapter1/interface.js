/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function (db, doc, callback) {
    //        var mongodb = require('mongodb');
    //        var uri = 'mongodb://localhost:27017/movies';
    //        // TODO: implement
    //        mongodb.MongoClient.connect(uri, function (error, db) {
    //            if (error) {
    //                console.log(error);
    //              //  process.exit(1);
    //            }
    db.collection('movies').insert(doc, function (error, result) {
        if (error) {
            console.log(error);
            //      process.exit(1);
        }
        db.collection('movies').find().toArray(function (error, docs) {
            if (error) {
                console.log(error);
                //     process.exit(1);
            }
            docs.forEach(function (doc) {
               // console.log(JSON.stringify(doc));
            });
        });
    })
    callback(null);

};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function (db, director, callback) {
    // TODO: implement
    var query = {
        "director": director
    };
    var tmp = [];
   db.collection('movies').find(query).sort({
        "title": 1}).toArray(callback);
//    }).toArray(function(error, docs,tmp) {
//        if (error) {
//            console.log(error);
//            process.exit(1);
//        }
//        docs.forEach(function (doc) {
////            var newtmp = JSON.encode(doc);
////            console.log(newtmp);
////            tmp.push(JSON.decode(newtmp);
////            console.log(tmp);
//          //  tmp.push(JSON.parse(JSON.stringify(doc)));
//          //  tmp.push(1);
//            console.log(JSON.stringify(doc));
//          
//            //console.log(tmp);
//        });
//    });
//    // console.log(tmp);
//    callback(null,tmp);
//    //result.push("down"); 
  //  console.log(result); 
  //  callback(null, []);

};