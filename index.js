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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;
function getAnswer(result, i=0) {
  const q = result[i].question;
  const a = result[i].answer;


  rl.question(q, (enteredA) => {

    if(i === result.length-1) {

      if(a === enteredA) {
        console.log(`Your answer is correct`);
        counter +=1
      } else {
        console.log(`Your answer is wrong`);
      }
    
      console.log('over', `${counter}`);
      rl.close();
      

    } else {

      if (a === enteredA) {
        console.log(`Your answer is correct`);
        counter++;
      } else {
        console.log(`Your answer is wrong`);
      }

      
      getAnswer(result, i= i+1)
    }
    
  });



}

getAnswer(result, 0);
