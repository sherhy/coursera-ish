from random import randint

board = []	#make board
for x in range(5):
	board.append(["O"] * 5)

def print_board(board):
	for row in board:
		print " ".join(row)

print "Let's play Battleship! (5x5 board; 4 turns)" #game setup

my_col =int(raw_input("Which column to place your ship?: "))-1 #ship setup
my_row =int(raw_input("Which row to place your ship?: "))-1
def place_ship (x,y):
	board[y][x] = "$"
place_ship(my_col, my_row)
print "Your ship is marked '$'" 
print_board(board)

def random_row(board):	#make random numbers
	return randint(0, len(board) - 1)
def random_col(board):
	return randint(0, len(board[0]) - 1)

def ship_make(a,b):	#place cp ship
	x=random_col(board)
	y=random_row(board)
	if x==a and y==b:
		ship_make(a,b)
	li = [[x,y]]
	if board[x][y] == "O":
		return li

ship_place = ship_make(my_col, my_row)

# def computer_guess(): #working on it
# 	chaos = ship_make(my_col, my_row)

for rr in range (4):	#guessing sequence
	print "Turn", rr+1

	guess_col = int(raw_input("Guess Column: "))-1
	guess_row = int(raw_input("Guess Row: "))-1

	if guess_row == ship_place[0][1] and guess_col == ship_place[0][0]:
		print "Congratulations! You sunk my battleship!"
		break
	else:
		if (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
			print "Oops, that's not even in the ocean."
		elif(board[guess_row][guess_col] == "X"):
			print "You guessed that one already."
		elif board[guess_row][guess_col] == "$":
			print "You sunk your own ship GG \nGame Over"
			break
		else:
			print "You missed my battleship!"
			board[guess_row][guess_col] = "X"
	print_board(board)

	if rr==3:
		print ("Game Over")