db.companies.aggregate([{
	$match: {
		"founded_year": 2004,
		"funding_rounds.4": {$exists: true}
	}
},{
	$project: {
		_id: 0,
		name: 1,
		funding_rounds: 1,
	}
},{
	$unwind: "$funding_rounds"
},{
	$group: {
		_id: "$name",
		funding: {$avg: "$funding_rounds.raised_amount"}
	}
},{
	$sort:{
		funding: 1
	}
}]).pretty()