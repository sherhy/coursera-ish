import urllib
import json

serviceurl = 'http://python-data.dr-chuck.net/geojson?'

while True:
	add = raw_input("where: ")
	if len(add) < 1 : break

	url = serviceurl+urllib.urlencode({'sensor': 'false', 'address': add})
	jsf = urllib.urlopen(url).read()

	try: js = json.loads(str(jsf))
	except: js = None
	if 'status' not in js or js['status'] != 'OK':
		print "typo"
		continue

	print js['results'][0]['place_id']