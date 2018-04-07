db.movieDetails.find({
	genres: {$all: ["Comedy", "Crime"]}
},{title:1,genres:1}).count()