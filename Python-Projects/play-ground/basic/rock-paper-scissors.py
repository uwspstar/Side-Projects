from random import randint
print("rock ...")
print("paper")
print("scissors")

player = input("player input ")
rand_num = randint(0, 2)
computer = "rock"
if rand_num == 0:
    computer = "paper"
elif rand_num == 1:
    computer = "scissors"

print(f"computer play {computer}")

if player == computer:
    print("it is a tie!")
elif player == "rock":
    if computer == "scissors":
        print("player win")
    else:
        print("computer win")
elif player == "paper":
    if computer == "rock":
        print("player win")
    else:
        print("computer win")
elif player == "scissors":
    if computer == "papper":
        print("player win")
    else:
        print("computer win")
else:
    print("enter a valid move!")
