import pymongo
from pprint import pprint

connection = pymongo.MongoClient("mongodb://localhost")
db = connection.enron
messages = db.messages

result = messages.update({
	'headers.Message-ID' : "<8147308.1075851042335.JavaMail.evans@thyme>"
},{
	'$push': {
		'headers.To' : "mrpotatohead@mongodb.com"
	}
})

for doc in result:
	pprint (doc)