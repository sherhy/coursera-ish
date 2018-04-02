db.movies.aggregate([{
	$match:{
		"tomatoes.viewer.rating": {$gte: 3},
		cast: {
			$elemMatch: {$exists: true} 
		},
		countries: {$in: ["USA"]}
	}
},{
	$project:{
		_id: 0,
		title: 1,
		num_favs: {
			$size: {
				$setIntersection: [["Sandra Bullock","Tom Hanks","Julia Roberts","Kevin Spacey","George Clooney"], "$cast"]
			}
		},
		rating: "$tomatoes.viewer.rating"
	}
},{
	$sort:{
		num_favs: -1,
		rating: -1,
		title: -1 
	}
},{
	$limit: 25
},{
	$skip: 24
}]).pretty()