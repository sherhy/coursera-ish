var airlines = []
db.air_alliances.find({
	name: "OneWorld"
}).forEach( (doc) => {
	airlines = doc.airlines
})
var oneWorldAirlines = db.air_airlines.find({"name": {$in: airlines}})

oneWorldAirlines.forEach( (airline)=>{
	db.air_alliances.aggregate([{
		$graphLookup: {
			startWith: airline.base,
			from: "air_routes",
			connectFromField: "dst_airport",
			connectToField: "src_airport",
			as: "connections",
			maxDepth: 1
		}
	}])
})