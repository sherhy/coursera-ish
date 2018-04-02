db.air_routes.aggregate([{
	$match: {
		dst_airport: {$in: ["JFK", "LHR"]},
		src_airport: {$in: ["JFK", "LHR"]}
	}
},{
	$group: {
		_id: "$airline.name"
	}
},{
	$lookup: {
		from: "air_alliances",
		foreignField: "airlines",
		localField: "_id",
		as: "alliance"
	}
},{
	$group:{
		_id: "$alliance.name",
		carriers : {$sum: 1}
	}
},{
	$sort: {
		carriers: -1
	}
}])