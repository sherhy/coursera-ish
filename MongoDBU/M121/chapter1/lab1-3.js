db.movies.aggregate([{
	"$project": {
		"_id": 0,
		"title_words": {
			$size: 
				{$split: ["$title", " "]}
			}
		}
	},{
	"$match": {
		"title_words": {$eq: 1}
	}
}]).itcount()