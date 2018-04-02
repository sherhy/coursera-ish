db.air_routes.aggregate([{
	$lookup: {
		from: "air_alliances",
		foreignField: "airlines",
		localField: "airline.name",
		as: "alliance"
	}
},{
	$match: {
		"alliance.name": "OneWorld"
	}
},{
	$lookup: {
		from: "air_airlines",
		foreignField: "name",
		localField: "airline.name",
		as: "airline"
	}
},{
	$graphLookup: {
		startWith: "$airline.base",
		from: "air_routes",
		connectFromField: "dst_airport",
		connectToField: "src_airport",
		as: "connections",
		maxDepth: 1
	}
},{
	$project: {"connections.dst_airport":1}
},{
	$unwind: "$connections"
},{
	$group: {_id: "$connections.dst_airport"}
}],{
	allowDiskUse: true
}).itcount()