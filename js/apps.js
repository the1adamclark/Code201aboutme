'use strict';
//first thing to do
console.log('This file is connected.');


//prompt our user for input data
var userName = prompt('What is my name?');
console.log(userName);

//Greet the user
alert('Hello ' + userName);

//convert the input to lowerCase
var lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcom back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
}


//this is where my magic starts
//first question
var food = prompt('Do I have a strict plant based diet? Please answer yes or no');
console.log(food);

//convert the input to lowerCase
var lowerCasefood = food.toLowerCase();
console.log(lowerCasefood);

//Validate the input using conditional logic using strict equals.
if(lowerCasefood === 'yes') {
   alert('sorry, this guy is a meat eater!!!');
} else {
  alert('That is correct!! I have been exclusively I.F. Carnivore since January 2020! I will take my steak with a side of steak');
}



//second question
var married = prompt('Am I married?');
console.log(married);

//convert the input to lowerCase
var lowerCasemarried = married.toLowerCase();
console.log(lowerCasemarried);

//Validate the input using conditional logic using strict equals.
if(lowerCasemarried === 'no' || 'nope' || 'not sure') {
   alert('that is correct, but this one has the best chance so far!!!');
} else {
  alert('I know, hard to believe I am not, right!..but ask me again sometime soon!');
}

//third question
var coach = prompt('I currently coach youth Archery for a worldwide organization? ');
console.log(coach);

//convert the input to lowerCase
var lowerCasecoach = coach.toLowerCase();
console.log(lowerCasecoach);

//Validate the input using conditional logic using strict equals.
if(lowerCasecoach === 'yes' || 'yep' || 'you betcha') {
   alert('I sure do, I often coach as many as 80 kids per year between the ages of 6 and 20 yrs old. I recently added shotgun coach to my resume too!');
  } else {
      alert('Sorry, missed it again, I am actually certified in 4 different shooting sport orgs');
}

//fourth question
var lip = prompt('I accidentally cut off my bottom lip when I was 3 years old - True or False?');
console.log(lip);

//convert the input to lowerCase
var lowerCaselip = lip.toLowerCase();
console.log(lowerCaselip);

//Validate the input using conditional logic using strict equals.
if(lowerCaselip === "false"){
    alert('actually I did in a motorcycle accident. My grandma told my mom to just throw it away instead of having is sewn back on');
  } else if (lowerCaselip === "true"){
    alert('OMG! can you really tell through Zoom?');
  } else {
    alert("stop staring and answer the questions please!!!");
}

//fifth 
var work = prompt('Would you believe I have been in the workforce for over 30 years?');
console.log(job);

//convert the input to lowerCase
var lowerCasework = work.toLowerCase();
console.log(lowerCasework);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'yes' || lowerCaseName === 'yep' || 'yeah') {
  alert('WOW!!!! Apparently I look really old to you');
} else {
  alert('Not quite 30, I started working a tax paying payroll job at 12 for my family business. So I am only at 28 years of service');
}


// logical operator example
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
var myBooleenValueTrue = true;
var anotherBooleenValueFalse = false;
var thirdBooleenValueTrue = false;
//next else if
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;

if (myBooleenValueTrue && thirdBooleenValueTrue){
  alert('The && will run if both are true');
  console.log('both values were true');
} else if(myBooleenValueTrue || anotherBooleenValueFalse){
  alert('The || will run if both are true');
  console.log('one of values was true');
} else if(thirdBooleenValueTrue){
  alert('the 3rd value was tru so this will run');
  console.log('thirdBooleenValueTrue was true');
} else {
  console.log('There were no true values');
}


// //create an empty array
// var emptyArray = [];
// //Create an array full of "quiz answers" by putting the answers into the array
// //                 0   1   2   3   4
// var quizAnswer = ['b','c','d','a','c'];

// //nested array
// var nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];

// //multiline
// var nestedArrayMultiLine  = [
//   ['yes', 'y'],
//   ['no', 'n'],
//   ['maybe', 'maybeNot']
// ];

// // we don't always have to commit to a specific data type
// var mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];


// Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

// Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()

// Display that name back to the user through a custom greeting welcoming them to your site.

// Display the user’s name back to them in your final message to the user.

// Developer Style Guide
// A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:

// Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.

// Make sure that all code is cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.

// Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.