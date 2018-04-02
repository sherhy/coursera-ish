db.movieDetails.aggregate({
	$match: {
		rated: "PG",
		"awards.nominations": 10
	}
}).itcount()