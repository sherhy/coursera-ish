db.movies.aggregate([{
	$project: {
		_id: 0,
		awards: 1,
		rating: "$imdb.rating"
	}
},{
	$match: {
		awards: /Won .+ Oscar.*/
	}
},{
	$group: {
		_id: 0,
		imdb_deviation: {$stdDevSamp: "$rating"},
		avg: {$avg: "$rating"},
		highest: {$max: "$rating"},
		lowest: {$min: "$rating"}
	}
}])