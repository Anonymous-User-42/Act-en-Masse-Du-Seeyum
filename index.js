// import assets from "./questions-answers";

let assets = {
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

let optionAlphbets = ["A", "B", "C"];

for (question in assets.questions) {
  console.log(`${assets.questions[question]}\n`);
  console.log(`Options\n`);
  for (option in assets.options[question]) {
    console.log(
      `${optionAlphbets[option]} ${assets.options[question][option]}`
    );
  }
  console.log("\n");
}
