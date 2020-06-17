'use strict'
console.log('this file is connected');

//global variables
var userPoints = 0;

alert('Hello and welcome to the guessing game.');

var user = prompt('what is your name?');
var userName = user.toLowerCase();
console.log(userName);

//the user variable
// - is a string
// no input == null
// '' or space is empty

//if the user is an empty string or is null, keep asking them for the answer
// while (user === ' || === null){ do something}

//shorter version
while(!user){
    user = prompt('what is your name, please provide it now')
}

// control flow in js

//if(condition){.....run this code}
// if(condition){....}else{.....}
//if(condition){.....}else if(second condition){....}else {....}
//if(condition){.....}else if(second condition){else if{....}{....}else {....}

// this is the not equals comparison operator
if(user !== 'craig'){
    console.log(user);
    alert('You are not the lower case craig we were looking for');
}
alert('hello ' +userName+ " get ready to play the game" )

var answer = prompt('is my favorite food popcorn?, please type yes or no').toLowerCase();
console.log(answer);

//check user input to add points for the game
if(answer ==='no' || answer === 'n'){
    alert('you were right, i dont like popcorn.');
    //userPoints = userPoints +1;
    userpoints +=1;

}else{
    alert('popcorn is gross!, you get no points')
    console.log('this is the user point totoal',userPoints);
}