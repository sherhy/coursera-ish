import sys
def main(args):
	n = int(args[1])
	qutoient = (12*n+5) / (3*n + 18)
	print ((4 - qutoient) < (1/15))

if __name__=="__main__":
	main(sys.argv)