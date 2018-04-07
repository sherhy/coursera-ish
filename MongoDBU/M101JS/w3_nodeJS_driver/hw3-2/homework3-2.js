var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/m101js', function(err, db) {

  assert.equal(err, null);
  console.log("Successfully connected to MongoDB.");

  var query = {
  	'_id': {'$exists': 1}
  }
  console.log(query)
  var cursor = db.collection('students3-2').find({query});

  cursor.forEach(doc => {
  	console.log(doc);
  }, err => {
  	assert.equal(err, null);
  	return db.close();
  })

});