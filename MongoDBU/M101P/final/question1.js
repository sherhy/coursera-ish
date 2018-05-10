db.messages.find({
	"headers.From": "andrew.fastow@enron.com",
	"headers.To": {$in: ["jeff.skilling@enron.com"]} 
}).pretty().count()

// db.messages.find({
// 	"headers.From": "andrew.fastow@enron.com",
// 	"headers.To": {$in: ["john.lavorato@enron.com"]} 
// }).pretty().count()