db.movies.aggregate([{
	$match:{
		languages: {$in: ["English"]},
		"imdb.rating": {$gt: 0}
	}
},{
	$project: {
		_id: 0,
		title: 1,
		cast: 1,
		rating: "$imdb.rating"
	}
},{
	$unwind: "$cast"
},{
	$group:{
		_id: "$cast",
		numFilms: {$sum: 1},
		average: {$avg: "$rating"}
	}
},{
	$sort: {
		numFilms: -1
	}
}])