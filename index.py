#   Python3 Equivalent to "./index.js"

assets = {
    # Asset JSON Object containing Questions, Answers & Options
    'questions': [
        "What is the Capital of Australia ?",
        "How many Feet are there in 75 Yards ?",
        "What is the longest River in the United States ?",
        "What is the Capital of the State of New York ?",
        "What Blood type the Universal Recipient ?",
        "How many Planets in our Solar System have a Larger Circumference than Earth ?",
        "What is the Energy of a Moving Object called ?",
        "How many Human years are equal to one Dog year ?",
        "What is the first date of the 21st Century ?",
        "What State is the Grand Canyon located in ?",
    ],
    'options': [
        ["Sydney", "Melbourne", "Canberra"],
        ["230", "220", "225"],
        ["Mississippi", "Missouri", "Yukon"],
        ["New York City", "Buffalo", "Albany"],
        ["AB-", "B+", "A+"],
        ["4", "6", "2"],
        ["Kinetic Energy", "Thermal Energy", "Mechanical Energy"],
        ["13", "5", "7"],
        ["January 1st 1999", "January 1st 2000", "January 1st 2001"],
        ["Nevada", "Arizona", "New Mexico"],
    ],
    'answers': [
        "Canberra",
        "225",
        "Mississippi",
        "Albany",
        "AB-",
        "4",
        "Kinetic Energy",
        "7",
        "January 1st 2001",
        "Nevada",
    ],
}

def game(param):
    sum_score = 0  # Initial game score - is subject to change
    retake_chances = 1  # Standard 1 retake chance per game
    game_cycle = 1  # Validates if the game has ended or not and consequently proceeds with the program

    # Game Initial Boilerplate Logs
    print("Are You Smarter than a 5th Grader\n\n")
    print("""John- I finally found the gold! I can finally be rich and take care of my family!
Vince the Genie- Wait a minute, you need to answer 10 questions to get the full amount
John- What! I never heard of this???
AHHAHAHAHHAHAHAH!!! These questions are called 'Are you smarter than a 5th grader,' every correct question adds a million to the chest, you get one retry on the whole quiz.
I will give you a friend to help you.
Help John win the prize to save himself from the streets of Toronto so he can take care of his family.""")

    print("\n\n")

    # Game User Interaction Interface
    option_alphabets = ["A", "B", "C"]

    for i, question in enumerate(param['questions']):
        print(f"{question}\n")
        print("Options\n")
        for j, option in enumerate(param['options'][i]):
            print(f"{option_alphabets[j]} {option}")
        print("\n")
        
        if game_cycle != 0:
            # Game Logic
            input_str = input("Enter your Answer Selection (Please enter the option choices, ie. not the Alphabets): ")
            validation = input_str.lower() == param['answers'][i].lower()  # Validates if the given answer choice is indeed right

            if validation:
                sum_score += 1
            elif retake_chances > 0:
                retake_or_not = input("Do you want to retake this question (Y/N)")
                if retake_or_not.lower() == "y":
                    retake_chances -= 1
                else:
                    continue
            else:
                game_cycle = 0
        else:
            continue

    # Game Score Board
    print("\n\n")
    if sum_score > 0:
        print(f"Your Final Score is: {sum_score} Million Ignots")
    else:
        print(f"Your Final Score is: {sum_score} Ignots")

game(assets)
