db.air_routes.aggregate([{
	$match: {
		airplane: {$in: ["747", "380"]}
	}
},{
	$group: {
		_id: "$airline.name",
		routes: {$sum: 1}
	}
},{
	$lookup: {
		from: "air_alliances",
		foreignField: "airlines",
		localField: "_id",
		as: "alliance"
	}
},{
	$project: {
		routes: 1,
		alliance: "$alliance.name"
	}
},{
	$group: {
		_id: "$alliance",
		routes: {$sum: "$routes"}
	}
},{
	$sort: {
		routes: -1
	}
}])