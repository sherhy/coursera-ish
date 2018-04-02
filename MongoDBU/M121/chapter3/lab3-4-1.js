db.air_airlines.aggregate([{
	$match: {
		country: {$in: ["Spain", "Germany", "Canada"]}
	}
},{
	$lookup: {
		from: "air_alliances",
		foreignField: "airlines",
		localField: "name",
		as: "alliance"
	}
},{
	$match: {
		"alliance.name": "OneWorld"
	}
},{
	$graphLookup: {
		startWith: "$base",
		from: "air_routes",
		connectFromField: "dst_airport",
		connectToField: "src_airport",
		as: "connections",
		maxDepth: 1
	}
},{
	$project: {
		"connections.dst_airport":1
	}
},{
	$unwind: "$connections"
},{
	$group: {
		_id: "$connections.dst_airport"
	}
}]).itcount()