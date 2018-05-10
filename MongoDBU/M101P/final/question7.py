import pymongo
from pprint import pprint

connection = pymongo.MongoClient("mongodb://localhost")
db = connection.pictures
images = db.images
albums = db.albums

iList = albums.aggregate([{
	"$unwind": "$images"
},{
	"$group": {
		"_id": "$images"
	}
},{
	"$lookup":{
		"from": "images",
		"localField": "_id",
		"foreignField": "_id",
		"as": "images"
	}
},{
	"$match":{
		"images.tags": {"$in": ["kittens"]}
	}
}])

# for doc in iList:
# 	pprint(doc)
print len(list(iList))