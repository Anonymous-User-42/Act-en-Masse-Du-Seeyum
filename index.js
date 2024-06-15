let assets = {
  //	Asset JSON Object containing Questions, Answers && Options
  questions: [
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
  options: [
    ["Sydney", "Melbourne", "Canaberra"],
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
  answer: [
    "Canaberra",
    "225",
    "Mississippi",
    "Albany",
    "AB-",
    "4",
    "Kinectic Energy",
    "7",
    "January 1st 2001",
    "Nevada",
  ],
};

game(assets);

function game(param) {
  let sumScore = 0; //	Initial game score - is subject to change
  let retakeChances = 1; //	Standard 1 retake chance per game
  let gameCycle = 1; //	Validates if the game has ended or not and consequently proceeds with the program

  //	Game Initial Boilerplate Logs

  console.log(`Are You Smarter than a 5th Grader\n\n`);
  console.log(
    `John- I finally found the gold!I can finally be rich and take care of my family!\nVince the Genie- Wait a minute, you need to answer 10 questions to get the full amount\nJohn- What! I never heard of this???\nAHHAHAHAHHAHAHAH!!! These questions are called are you smarter than a 5th grader,every correct question adds a million on to the chest, you get one re-try on the whole quiz\nI will give you a friend to help you.\nHelp John win the prize to save himself from the streets of Toronto and so he can take care of his family`
  );
  console.log("\n\n");

  //	Game User Interaction Interface

  let optionAlphbets = ["A", "B", "C"];

  for (question in param.questions) {
    console.log(`${param.questions[question]}\n`);
    console.log(`Options\n`);
    for (option in param.options[question]) {
      console.log(
        `${optionAlphbets[option]} ${param.options[question][option]}`
      );
    }
    console.log("\n");
    if (gameCycle !== 0) {
      //	Game Logic

      const input = require(`prompt-sync`)();
      const inputStr = input(
        `Enter your Answer Selection (Please enter the option choices, ie. not the Alphabets): `
      ); //	User answer input

      let validation =
        inputStr.toLowerCase() === param.answer[question].toLowerCase(); //	Validates if the given answer choice is indeed right

      if (validation) {
        sumScore++;
      } else if (retakeChances > 0) {
        let retakeOrNot = input(`Do you want to retake this question (Y/N)`);

        if (retakeOrNot.toLowerCase() === String(`y`)) {
          retakeChances--;
        } else {
          //   throw new Error(`You have successfully exited the Game`); //	end game}
          continue;
        }
      } else {
        gameCycle = 0;
      }
    } else {
      continue;
    }
  }

  //	Game Score Board

  console.log("\n\n");
  if (sumScore > 0) {
    console.log(`Your Final Score is: ${sumScore} Million Ignots`);
  } else {
    console.log(`Your Final Score is: ${sumScore} Ignots`);
  }
}
