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
var married = prompt('how many times have I been married');
console.log(married);

//third question
var coach = prompt('Do I coach youth sports for a worldwide organization? ');
console.log(coach);

//fourth question
var lip = prompt('I dont have a bottom lip');
console.log(lip);

//fifth 
var uwork = prompt('Would you believe I have been in the workforce for over 30 years?');
console.log(job);

//convert the input to lowerCase
var lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcom back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
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