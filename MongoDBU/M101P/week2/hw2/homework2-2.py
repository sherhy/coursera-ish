import pymongo
import datetime
import sys

connection = pymongo.MongoClient("mongodb://localhost")

db = connection.school
grades = db.grades

def main():
	try: 
		for i in range(grades.count()):
			results = grades.find({
				'$query': {
					"student_id": i,
					"type": "homework"
				},
				'$orderby': {
					'score': 1
				}
			}).limit(1)

			for res in results:
				grades.delete_one(res)
			

	except Exception as e:
		print "Exception", type(e), e

if __name__=="__main__":
	main()
