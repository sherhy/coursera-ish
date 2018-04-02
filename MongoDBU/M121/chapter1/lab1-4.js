db.movies.aggregate([{
	$match: {
		cast: { 
			$elemMatch: {$exists: true} 
		},
		directors: { 
			$elemMatch: {$exists: true} 
		},
		writers: {
			$elemMatch: {$exists: true}
		}
	} 
},{
	$project: {
		_id: 0,
		cast: 1,
		directors:1,
		writers: {
			$map: {
				input: "$writers",
				as: "w",
				in: {
					$arrayElemAt: [{$split: ["$$w", " ("]}, 0]
				}
			}
		}
	}
},{
	$project: {
		loLove:{
			$gt: [{
				$size: {
					$setIntersection: ["$cast", "$directors", "$writers"]
				}
			},0]
		}
	}
},{
	$match: {
		loLove: true
	}
},{
	$count: "lol"
}])