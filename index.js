const readline = require("readline");
class Module {
  constructor() {}
}
// let arr = [{question: "What is a nighthawk's primary food source?", answer: 'insects'}]
// console.log(arr)
let result = [
  {
    question: "What is a nighthawk's primary food source?",
    answer: "insects",
  },
  {
    question: "True or false?  Nighthawks are closely related to hawks.",
    answer: "false",
  },
  {
    question: "True or false?  Nighthawks make nests.",
    answer: "false",
  },
  {
    question: "Where do Common Nighthawks spend the winter?",
    answer: "South America",
  },
  {
    question:
      "True or false?  Bullbat is another name for the Common Nighthawk.",
    answer: "true",
  },
];


let counter = 0;
let counter1 = 0;
let counter3 = 0;


function getAnswer(arg) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const q = arg.question;
    const a = arg.answer;

    rl.question(q, (enteredA) => {
      
      console.log(`answer ==> ${enteredA} result=${a === enteredA}`);

      rl.close();
      resolve(enteredA);
    });
  });
}
getAnswer(result[0])
  .then(() => getAnswer(result[1]))
  .then(() => getAnswer(result[2]))
  .then(() => getAnswer(result[3]))
  .then(() => getAnswer(result[4]));

