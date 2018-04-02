import sqlite3
import re

output= sqlite3.connect('sqlprac.sqlite')
cur = output.cursor()

cur.execute('''
	DROP TABLE IF EXISTS Counts''')
cur.execute('''
	CREATE TABLE Counts (org TEXT, count INTEGER)''')

fname = 'mbox.txt'
fj = open(fname)

for line in fj:
	if not line.startswith("From "): continue
	org = re.search('@(\S+)', line)
	email= org.group(0)[1:]
	cur.execute('SELECT count FROM Counts WHERE org = ? ', (email, ))
	row = cur.fetchone()
	if row is None:
		cur.execute('''INSERT INTO Counts (org, count) 
			VALUES ( ?, 1 )''', ( email, ) )
	else :
		cur.execute('UPDATE Counts SET count=count+1 WHERE org = ?', 
    		(email, ))
output.commit()


cur.close()