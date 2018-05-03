db.companies.aggregate( [{ 
	$match: {	"relationships.person": { $ne: null } } 
},{ 
	$project: { 
		relationships: 1, 
		permalink: 1,
		_id: 0 
	} 
},{ 
	$unwind: "$relationships" 
},{
	$match: {"relationships.person.permalink": "eric-di-benedetto"}
},{
	$group:{
		_id: "$permalink"
	}
}]).itcount()