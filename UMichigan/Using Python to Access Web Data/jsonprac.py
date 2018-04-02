import json
import urllib

url = raw_input("url: ")
jj = urllib.urlopen(url).read()
info = json.loads(jj)
running =0
for x in info["comments"]:
	running+= x['count']
print running