def start():
  print ("John- I finally found the gold!I can finally be rich and take care of my family!")
  
  print("Vince the Genie- Wait a minute, you need to answer 10 questions to get the full amount")
  
  print("John- What! I never heard of this???")
  
  print("AHHAHAHAHHAHAHAH!!! These questions are called are you smarter than a 5th grader,every correct question adds a million on to the chest, you get one re-try on the whole quiz")
 
  print("I will give you a friend to help you.")
  
  print("Help John win the prize to save himself from the streets of Toronto and so he can take care of his family")


def question1():
  retake=1
  money=0
  while retake > 0:
    retake=retake+1
    if (retake==4):
        retake=retake-7
        print ("This is your last retake")
    Q1ans = int(input("What is the capital of Australia? Enter 1 for Melbourne, 2 for Sydney, and 3 for Canberra"))
    if (Q1ans == 2) or (Q1ans == 1):
        print ('INCORRECT ANSWER')
        retake1 = int(input("Enter 1 if you want to retake this question, or 2 if you do not have any or do not wish to use them at this time"))
        if retake1==1:
          retake=retake+1
        else:
            retake=retake-2
    if (Q1ans==3):
        retake=retake-2
        print ("Correct answer")
        money = money+1000000
  print ("This is the amount of money you have",money)
  return retake
  return money
                      
                    
        


#main
start()
question1()

