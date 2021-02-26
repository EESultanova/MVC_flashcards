let fs = require("fs");
const readline = require("readline");

class FlashCards {
  constructor(fileName) {
    this.allQuestions = [];
    this.fileName = fileName;
  }
  model() {
    let file = "./" + this.fileName;

    fs.readFile(file, "utf8",(err, data ) => {
      if (err) throw err;

      let arr = data.split("\n").filter((el) => el);
      for (let i = 0; i < arr.length; i = i + 2) {
        this.allQuestions.push({
          question: arr[i],
          answer: arr[i + 1],
        });
      }
    
      this.view();
    });
  }

  view() {
    const q = this.allQuestions;
    // UI
    //show question and recive answers

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let counter = 0;
    function getAnswer(i = 0) {
      const question = q[i].question;
      const a = q[i].answer;

      rl.question(`${question} \n `, (enteredA) => {
        
        if (a === enteredA) {
          console.log(`Your answer is correct`);
          counter++;
        } else {
          console.log(`Your answer is wrong`);
        }
        if (i === q.length - 1) {
          console.log("Your score = ", `${counter}`);
          console.log(`   
          .:.               
          .::::.             
..         ..::::::''::         
::::..  .::''''':::    ''.      
':::::::'         '.  ..  '.    
::::::'            : '::   :   
:::::     .        : ':'   :  
:::::    :::       :.     .'. 
.::::::    ':'     .' '.:::: : 
::::::::.         .    ::::: : 
:::::    '':.... ''      '''' : 
':::: .:'              ...'' :  
..::.   '.........:::::'   :   
'':::.   '::'':'':::'   .'    
     '..  ''.....'  ..'      
        ''........''
         `)
          rl.close();
        } else {
          getAnswer((i = i + 1));
        }
      });
    }

    getAnswer(0);
  }

  controller() {
    this.model();
  }
}

module.exports = FlashCards
