db.grades.aggregate([{
	$unwind: "$scores"
},{
	$match: {"scores.type": {$ne: "quiz"}}
},{
	$group: {
		_id: "$class_id",
		avg: {$avg: "$scores.score"}
	}
},{
	$sort: {
		avg: -1
	}
}]).pretty()