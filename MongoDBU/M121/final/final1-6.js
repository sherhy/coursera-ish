var pipeline = [{
	$sort: {
		name: 1
	}
},{
	$project: {
		name:1,
		phone: {
			$concat: [
				{$arrayElemAt: [{$split: ["$phone", " "]}, 0]},
				"********"	
		]},
		ssn: {
			$concat: [
				"********",
				{$arrayElemAt: [{$split: ["$ssn", "-"]},2]}	
		]}
	}
}]

db.people.aggregate([{
	$match:{
		age: 95
	}
},{
	$project: {
		name: 1,
		phone: {
			$concat: [
				{$arrayElemAt: [{$split: ["$phone", " "]}, 0]},
				"********"	
		]},
		ssn: {
			$concat: [
				"********",
				{$arrayElemAt: [{$split: ["$ssn", "-"]}, 2]}	
		]}
	}
}])