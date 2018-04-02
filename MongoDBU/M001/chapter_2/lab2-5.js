db.movieDetails.find({
	"genres.1":"Western"
}).pretty().count()