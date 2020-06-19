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
// this is for todays lab ^^^^^

//loops will run intil a condition is truthy, or not truthy
//while
// while(condition){
//     //something has to change
    
// }
// var i =0;
// while (i< value){
//     i++;
//     //i += 1;
//     //i - i + 1
// }
// do {code runs here first then the condition is checked} while(condition); 

// for(setUp  condition  change variable){
//     //add code here to do stuff
// }

for(var i =0; i < 10; i++){
    if(i===2){
        console.log('keep going past this number 2');
        continue;
    }
    if (i=== 4){
        console.log('this is going ti break us out of the loop');
        break;
    }
    console.log('the variable i: ', i);
}

// review of arrays

var foodsIlike = ["tatertos", "chips", "popcorn", "kale"];
console.log(foodsIlike);

// use loops to travers through an array

for (var x = 0; x < foodsIlike.length; x++) {
  console.log('is doing work', foodsIlike[x]);
}

//lots of different methods
foodsIlike.push('swiss chard');
console.log('array push' , foodsIlike);

//pop - removes elements off the array

popArrayElement = foodsIlike.pop();
console.log('array pop' , popArrayElement);

console.log('array after the pop():', foodsIlike);

//unshift array to remove from the front
var shiftArray = foodsIlike.shift();
console.log('unshift of array first element', shiftArray);
console.log
//shift array - removes elements from the front of the array


//yes js lets you do this (have an array of different data types). dont do it
//var mixedUpArray - ['yehaw', 42, true, ['yo'], {}];
// dont do it