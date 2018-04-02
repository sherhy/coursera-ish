db.movieDetails.aggregate({
	$match:{
		genres: {$in: ["Comedy"]}
	}
}).itcount()