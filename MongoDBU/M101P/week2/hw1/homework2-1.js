db.grades.aggregate([{
	$match: {
		score: {$gte: 65}
	}
},{
	$sort:{
		score: 1
	}
},{
	$limit: 15
}]).pretty()