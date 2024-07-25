#! /usr/bin/env node

import inquirer from 'inquirer';
import Choices from 'inquirer/lib/objects/choices.js';

// -------------------------------name Input--------------------------------
let nameInput = await inquirer.prompt({
  type: "input",
  name: "nameRecieve",
  message: "Please enter your name",
});
// ------------------------print name with crataria------------------------
  let trimname = nameInput.nameRecieve.trim(); 

  if(trimname !== ""){
    console.log(`\n\tHey ${trimname}, Welcome to the Quiz\n`);
  
// ----------------------------Use Do While loop----------------------------

do{

// ----------------------------quiz start----------------------------------

let choose = await inquirer.prompt({
  type: "list",
  name: "yourChoice",
  message: "\n Select one Quiz",
  choices: ["Basic", "Intermediate",],
})

if(choose.yourChoice === "Basic"){
  console.log(`${trimname} You select the Basic quiz`);
  const basic_quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
  
  } = await inquirer.prompt([{
    type: "list",
    name: "question_1",
    message: "\nWhat is the purpose of the 'let' keyword in TypeScript?",
    choices: ["1. To declare a variable that is block-scoped.","2. To define a constant variable.", "3. To declare a global variable.","4. To create a type alias."],
  },
  {
    type: "list",
    name: "question_2",
    message: "\nWhich symbol is used to terminate a statement in TypeScript?",
    choices: ["1. ':' ", "2. ',' ", "3. '.'", "4. ';'"],
  },
  {
    type: "list",
    name: "question_3",
    message: "\nHow do you define an interface in TypeScript?",
    choices: ["1. interface MyInterface {}","2. class MyInterface {}","3. type MyInterface {}","4. def MyInterface {}"],
  },
  {
    type: "list",
    name: "question_4",
    message: "\nWhich of the following is the correct way to declare an array of strings in TypeScript?",
    choices: ["1. List<string>","2. string[]","3. Array of string","4. strings[]"],
  },
  {
    type: "list",
    name: "question_5",
    message: "\nWhich operator is used for type assertion in TypeScript?",
    choices: ["1. as", "2. =", "3. :", "4. ->"],
  },

])

let viewScore = await inquirer.prompt({
  type: "confirm",
  name: "totalScore",
  message: `${trimname}! Are you want to view your score?`
})


if(viewScore.totalScore === true){
 
  let basicScore:number = 0;

switch(basic_quiz.question_1){
  case "1. To declare a variable that is block-scoped.":
    ++basicScore;
    console.log("1. Correct Answer!");
    break;
    default:
      console.log("1. Incorrect Answer!");
}

switch(basic_quiz.question_2){
  case "4. ';'":
    ++basicScore;
    console.log("2. Correct Answer!");
    break;
    default:
      console.log("2. Incorrect Answer!");
}

switch(basic_quiz.question_3){
  case "1. interface MyInterface {}":
    ++basicScore;
    console.log("3. Correct Answer!");
    break;
    default:
      console.log("3. Incorrect Answer!");
}

switch(basic_quiz.question_4){
  case "2. string[]":
    ++basicScore;
    console.log("4. Correct Answer!");
    break;
    default:
      console.log("4. Incorrect Answer!");
}

switch(basic_quiz.question_5){
  case "1. as":
    ++basicScore;
    console.log("1. Correct Answer!");
    break;
    default:
      console.log("1. Incorrect Answer!");
      
};

console.log(`${trimname}! Your score is: ${basicScore}`);
}else(
  console.log(`${trimname}! It's Your Choices`)
);

let Exit = await inquirer.prompt({
  type: "confirm",
  name: "Answer",
  message: `${trimname}! Are you Want to Exit`,
})

if(Exit.Answer === true){
  console.log(`${trimname}! You successfully Exit`);
  break;
}
else if(Exit.Answer === false){
  console.log("Continue..")
}
} // basic


else if (choose.yourChoice === "Intermediate"){
 
  console.log(`${trimname} You select the Intermediate quiz`);
  const intermediate_quiz: {
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;
} = await inquirer.prompt([{
  type: "list",
  name: "question_6", 
  message: "\n1. Which keyword is used to define a variable that cannot be reassigned in TypeScript?",
  choices: ["1. let", "2. var", "3. const", "4. static"]
},
{
  type: "list",
  name: "question_7", 
  message: "\n2. How do you explicitly type a variable as a number in TypeScript?",
  choices: ["1. let num: number;", "2. var num = number;", "3. const num = 5;", "4. num: number;"]
},
{
  type: "list",
  name: "question_8", 
  message: "\n3. Which of the following is a correct way to define a function type that takes a number and returns a string?",
  choices: ["1. (num: number) => string", "2. function(num: number) -> string", "3. number -> string", "4. (string) => number"]
},
{
  type: "list",
  name: "question_9", 
  message: "\n4. How do you declare a variable that can hold either a string or null?",
  choices: ["1. const name: string || null;", "2. let name: string | null;", "3. let name = string or null;", "4. var name: string, null;"]
},
{
  type: "list",
  name: "question_10", 
  message: "\n5. Which of the following is used to handle exceptions in TypeScript?",
  choices: ["1. if/else", "2. handle/error", "3. throw/catch", "4. try/catch"]
},
]);

let seeScore = await inquirer.prompt({
  type: "confirm",
  name: "Score",
  message: `${trimname}! Are you want to view your score?`
})

if(seeScore.Score === true){

  let intermediateScore = 0;

switch(intermediate_quiz.question_6){
    case "3. const":
      intermediateScore++;
      console.log("1. Correct Answer");
      break;
      default:
      console.log("1. Incorrect Answer");
  };

switch(intermediate_quiz.question_7){
    case "1. let num: number;":
      intermediateScore++;
      console.log("2. Correct Answer");
      break;
      default:
      console.log("2. Incorrect Answer");
  };

switch(intermediate_quiz.question_8){
    case "1. (num: number) => string":
      intermediateScore++;
      console.log("3. Correct Answer");
      break;
      default:
      console.log("3. Incorrect Answer");
  };

switch(intermediate_quiz.question_9){
    case "2. let name: string | null;":
      intermediateScore++;
      console.log("4. Correct Answer");
      break;
      default:
      console.log("4. Incorrect Answer");
  };

switch(intermediate_quiz.question_10){
    case "4. try/catch":
      intermediateScore++;
      console.log("5. Correct Answer");
      break;
      default:
      console.log("5. Incorrect Answer");
  };

  console.log(`${trimname} Your score is: ${intermediateScore} `);
  }
  else(console.log(`${trimname} think about it `));

  let Exit = await inquirer.prompt({
    type: "confirm",
    name: "Answer",
    message: `${trimname}! Are you Want to Exit`,
  })
  
  if(Exit.Answer === true){
    console.log(`${trimname}! You successfully Exit`);
    break;
  }
  else if(Exit.Answer === false){
    console.log("Continue..")
  }

}  // intermediate


 } // do loop

 while(true);

 } // if name 

   else{console.log("\nPlease enter a valid name")};


