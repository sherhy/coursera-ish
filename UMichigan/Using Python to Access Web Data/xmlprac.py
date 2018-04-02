import urllib
import xml.etree.ElementTree as ET

url= raw_input("url: ")
print 'Retrieving', url
uh = urllib.urlopen(url)
data = uh.read()
print 'Retrieved',len(data),'characters'

tree = ET.fromstring(data)
count = tree.findall('.//count')
tot=0
for x in count:
    tot += int(x.text)

print tot