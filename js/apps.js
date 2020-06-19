'use strict';
//first thing to do
console.log('This file is connected.');

//global variables
var userPoints = 0;

alert('Hello and welcome to the guessing game.');

var user = prompt('what is your name?');
var userName = user.toLowerCase();
console.log(userName);


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


// var lowerCasefood = food.toLowerCase();
var food = (function() { 
  prompt('Do I have a strict plant based diet? Please answer yes or no');
  console.log(food);
  
  //convert the input to lowerCase
  // var lowerCasefood = food.toLowerCase();
  //console.log(lowerCasefood);
  
  //Validate the input using conditional logic using strict equals.
  if(food === 'yes') {
     alert('sorry, this guy is a meat eater!!!');
  } else {
    alert('That is correct!! I have been exclusively I.F. Carnivore since January 2020! I will take my steak with a side of steak');
  }
  //return alert;
}())


// //second question
// var married = prompt('Am I married?');
// console.log(married);

// //convert the input to lowerCase
// var lowerCasemarried = married.toLowerCase();
// console.log(lowerCasemarried);

// //Validate the input using conditional logic using strict equals.
// if(lowerCasemarried === 'no' || 'nope' || 'not sure') {
//    alert('that is correct, but this one has the best chance so far!!!');
// } else {
//   alert('I know, hard to believe I am not, right!..but ask me again sometime soon!');
// }


//second question as a function

//function amImarried(){

function amImarried(){
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
amImarried();


// //third question
// var coach = prompt('I currently coach youth Archery for a worldwide organization? ');
// console.log(coach);

// //convert the input to lowerCase
// var lowerCasecoach = coach.toLowerCase();
// console.log(lowerCasecoach);

// //Validate the input using conditional logic using strict equals.
// if(lowerCasecoach === 'yes' || 'yep' || 'you betcha') {
//    alert('I sure do, I often coach as many as 80 kids per year between the ages of 6 and 20 yrs old. I recently added shotgun coach to my resume too!');
//   } else {
//       alert('Sorry, missed it again, I am actually certified in 4 different shooting sport orgs');
// }


//third question as a function

function archery(){
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
archery();

// //fourth question
// var lip = prompt('I accidentally cut off my bottom lip when I was 3 years old - True or False?');
// console.log(lip);

// //convert the input to lowerCase
// var lowerCaselip = lip.toLowerCase();
// console.log(lowerCaselip);

// //Validate the input using conditional logic using strict equals.
// if(lowerCaselip === "false"){
//     alert('actually I did in a motorcycle accident. My grandma told my mom to just throw it away instead of having is sewn back on');
//   } else if (lowerCaselip === "true"){
//     alert('OMG! can you really tell through Zoom?');
//   } else {
//     alert("stop staring and answer the questions please!!!");
// }

//fourth question as a function

var alert = (function();
  var lip = prompt('I accidentally cut off my bottom lip when I was 3 years old - True or False?');
  console.log(lip);

  //convert the input to lowerCase
  var lowerCaselip = lip.toLowerCase();
  console.log(lowerCaselip);

  //Validate the input using conditional logic using strict equals.
  if(lowerCaselip === "false"){
      alert('actually I did in a motorcycle accident. My grandma told my mom to just throw it away instead of having is sewn back on')
    } else if (lowerCaselip === "true"){
      alert('OMG! can you really tell through Zoom?')
    } else {
      alert("stop staring and answer the questions please!!!")
}());

// //fifth 
// var work = prompt('Would you believe I have been in the workforce for over 30 years?');
// console.log(work);

// //convert the input to lowerCase
// var lowerCasework = work.toLowerCase();
// console.log(lowerCasework);

// //Validate the input using conditional logic using strict equals.
// if(lowerCasework === 'yes' || lowerCasework === 'yep' || 'yeah') {
//   alert('WOW!!!! Apparently I look really old to you');
// } else {
//   alert('Not quite 30, I started working a tax paying payroll job at 12 for my family business. So I am only at 28 years of service');
// }


//fifth question as a function
var work = prompt('Would you believe I have been in the workforce for over 30 years?');
console.log(work);

//convert the input to lowerCase
var lowerCasework = work.toLowerCase();
console.log(lowerCasework);

//Validate the input using conditional logic using strict equals.
if(lowerCasework === 'yes' || lowerCasework === 'yep' || 'yeah') {
  alert('WOW!!!! Apparently I look really old to you');
} else {
  alert('Not quite 30, I started working a tax paying payroll job at 12 for my family business. So I am only at 28 years of service');
}

// //sixth question
// var numGuess = prompt('I am thinking of a number between 1 and 10, I will give you 4 tries to guess it');
// console.log(numGuess);

// var numGuess = i; 
// for(var i =0; i < 10; i++){
//   if(i !== 4){
//       console.log('nope, keep guessing');
//     } else {
//       console.log('WAY TO GO YOU NAILED IT');
//       break;
//   }
//     console.log('the variable i: ', i);

//     userPoints = userPoints + 1;
//     userPoints += 1;
//     console.log('This is the user point total', userPoints);
  
// }


//sixth question as a function
var numGuess = prompt('I am thinking of a number between 1 and 10, I will give you 4 tries to guess it');
console.log(numGuess);

var numGuess = i; 
for(var i =0; i < 10; i++){
  if(i !== 4){
      console.log('nope, keep guessing');
    } else {
      console.log('WAY TO GO YOU NAILED IT');
      break;
  }
    console.log('the variable i: ', i);

    userPoints = userPoints + 1;
    userPoints += 1;
    console.log('This is the user point total', userPoints);
  
}

//seventh question

var dreamPlaces = ['Ireland, Alaska, Iasle of Man, Canada, Siberia, Antarctica, Mariana Trench, Outer Space, Australia, Japan ' ];
// placesILike.push('rome');
// console.log(placesILike);
var dreamPlaces = 6;
while (dreamPlaces > 0) {
  console.log('Inside while loop');
  alert(userName + ' guess what place I want to visit first');
  var guess = prompt('Ireland, Alaska, Iasle of Man, Canada, Siberia, Antarctica, Mariana Trench, Outer Space, Australia, Japan');
  var match = false;
  for (var i = 0; i < dreamPlaces.length; i++) {
    if (guess === dreamPlaces[i]) {
      alert('Correct, I would love to throw a pint or two of Guiness down with the boys at the pub in Dublin');
      match === true;
      break;
    } else {
      console.log('incorrect answer', dreamPlaces[i]);
      
    }
  }
  if (match === false) {
    alert('No, Even though I would love to, thats not number 1');
    break;
  } else {
    alert('Try again.');
  }
  console.log('array push', dreamPlaces);
  dreamPlaces--;
}


// //check user input to add points for the game
// if(answer ==='no' || answer === 'n'){
//   alert('you were right, i dont like popcorn.');
//   //userPoints = userPoints +1;
//   userpoints +=1;

// }else{
//   alert('popcorn is gross!, you get no points')
//   console.log('this is the user point totoal',userPoints);
// }

// //convert the input to lowerCase
// var lowerCasework = work.toLowerCase();
// console.log(lowerCasework);

//Validate the input using conditional logic using strict equals.
// if(lowerCasework === 'yes' || lowerCasework === 'yep' || 'yeah') {
//   alert('WOW!!!! Apparently I look really old to you');
// } else {
//   alert('Not quite 30, I started working a tax paying payroll job at 12 for my family business. So I am only at 28 years of service');
// }


// logical operator example
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;
// //next else if
// // var myBooleenValueTrue = false;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = true;
// //else
// // var myBooleenValueTrue = false;
// // var anotherBooleenValueFalse = false;
// // var thirdBooleenValueTrue = false;

// if (myBooleenValueTrue && thirdBooleenValueTrue){
//   alert('The && will run if both are true');
//   console.log('both values were true');
// } else if(myBooleenValueTrue || anotherBooleenValueFalse){
//   alert('The || will run if both are true');
//   console.log('one of values was true');
// } else if(thirdBooleenValueTrue){
//   alert('the 3rd value was tru so this will run');
//   console.log('thirdBooleenValueTrue was true');
// } else {
//   console.log('There were no true values');
// }


// // //create an empty array
// // var emptyArray = [];
// // //Create an array full of "quiz answers" by putting the answers into the array
// // //                 0   1   2   3   4
// // var quizAnswer = ['b','c','d','a','c'];

// // //nested array
// // var nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];

// // //multiline
// // var nestedArrayMultiLine  = [
// //   ['yes', 'y'],
// //   ['no', 'n'],
// //   ['maybe', 'maybeNot']
// // ];

// // // we don't always have to commit to a specific data type
// // var mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];


// // Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

// // Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

// // Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// // Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// // As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

// // Ask the user their name through a prompt()

// // Display that name back to the user through a custom greeting welcoming them to your site.

// // Display the user’s name back to them in your final message to the user.

// // Developer Style Guide
// // A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:

// // Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.

// // Make sure that all code is cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.

// // Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.



// lab03 extend your guessing game

// 1. Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. 
//  x   Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. 
//  x   You may choose to do whatever top ten list that you wish.
//  x  Convert your work experience and education summary into an unordered list using HTML

//2.Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//  x  Indicates through an alert if the guess is “too high” or “too low”.
//    It should give the user exactly four opportunities to get the correct answer.
//    After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

//3.Add a 7th question that has multiple possible correct answers that are stored in an array.
//    Give the user 6 attempts to guess the correct answer.
//    The guesses will end once the user guesses a correct answer or they run out of attempts.
//    Display all the possible correct answers to the user.
//    Consider using a loop of some sort for this question.

//4.Keep track of the total number of correct answers. 
//At the end tell them how many they got correct out of the 7 questions asked
}
