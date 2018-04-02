db.movies.aggregate([{
	$match: {
		"imdb.rating": {$gt: 0},
		"metacritic": {$gt: 0}
	}
},{
	$facet: {
		imdb: [{
			$sort: {"imdb.rating": -1}
		},{
			$limit: 10
		}],
		meta: [{
			$sort: {"metacritic": -1}
		},{
			$limit: 10
		}]
	} 
},{
	$project: {
		"imdb.title": 1,
		"meta.title": 1,
	}
},{
	$project: {
		winner: {$setIntersection: ["$imdb", "$meta"]}
	}
}]).pretty().itcount()
