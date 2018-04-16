db.sysprofile.createIndex({"milli":-1})
db.sysprofile.find({}).sort({"milli":-1}).limit(1)