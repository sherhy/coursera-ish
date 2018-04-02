import urllib
import re
from BeautifulSoup import *

url = raw_input('Enter - ')
position = int(raw_input ('position: '))
repeat = int(raw_input('repeat process x itmes: '))
tag = 'a'

def linktourl(u, t):
	html = urllib.urlopen(u).read()
	soup = BeautifulSoup(html)
	tags = soup(t)
	return tags

def findthirdlink(soup, position):
	n = 0
	nextlink = None
	for x in soup:
		n +=1
		if n==position:
			nextlink = x.get('href') #url
			print x.contents[0] #name
	return nextlink

def solution(link, po, repeat, tag):
	soup = linktourl(link, tag)
	nexturl = findthirdlink(soup, po)
	repeat -=1
	if repeat >0:
		solution(nexturl, po, repeat, tag)

solution(url, position, repeat, tag)