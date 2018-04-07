import pymongo
import sys
from pprint import pprint

connection = pymongo.MongoClient("mongodb://localhost")

db = connection.school
students = db.students

def remove_lowest_hw():
	try: 
		for i in range(200):
			assingments = students.find_one({
				'_id': i
			})

			lower = 100
			works = assingments['scores']
			# pprint (works)

			for ass in range(len(works)):
				if works[ass]['type'] == 'homework' and works[ass]['score']< lower: 
					lower = works[ass]['score']
					index = ass

			students.find_one_and_update({
				'_id': i
			},{
				'$unset': {'scores.'+str(index): ""}
			})

	except Exception as e:
		print "Exception", type(e), e

def check():
	print 'count ',students.count()

	print 'student1'
	cursor = students.find( { '_id' : 137 } )
	for doc in cursor:
		pprint(doc)

	print 'asnwer'
	cursor = students.aggregate([{ 
		'$unwind': '$scores' 
	},{
		'$group': {
			'_id': '$_id',
			'average': { '$avg': '$scores.score' }
		}
	},{ 
		'$sort': { 
			'average' : -1 
			} 
	},{ 
		'$limit': 1 
	}])

	for doc in cursor:
		pprint(doc['_id'])


if __name__=="__main__":
	remove_lowest_hw()
	check()
