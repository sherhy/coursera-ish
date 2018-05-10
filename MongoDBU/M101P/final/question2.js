db.messages.aggregate([{
	$project: {
		headers: 1
	}
},{
	$unwind: "$headers.To"
},{
	$group:{
		_id: "$headers"
	}
},{
	$group:{
		_id: {
			sender: "$_id.From",
			recepient : "$_id.To"
		},
		count: {$sum: 1}
	}
},{
	$sort: {
		count: -1
	}
}],{
	allowDiskUse:true
})