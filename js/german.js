"use strict";


function german() {
    return "Du bist die heißeste Tasche";
}
var germanElement = german();

let thisGerman = document.getElementById("german").addEventListener("click", german);
    
    
    
module.exports = germanElement;
    

     






    
   
    



//     let germanText = [
//         {"you" : "Du"},
//         {"are" : "bist"},
//         {"the" : "die"},
//         {"hottest" : "heißeste"},
//         {"pocket" : "Tasche"},
//     ];

// var userInput = "You are the hottest pocket";
// var userInputArray = userInput.split(' ');


// module.exports = userInputArray;


// let translatedText = [];


// function translateToGerman(userInput){
// let wordArray = userInput.split(" ");


// wordArray.map(function(word, i){
//     switch(word){
//         case "you":
//             translatedText[i] = germanText.you;
//             break;
//         case "are":
//             translatedText[i] = germanText.are;
//             break;
//         case "the":
//             translatedText[i] = germanText.the;
//             break;
//         case "hottest":
//             translatedText[i] = germanText.hottest;
//             break;
//         case "pocket":
//             translatedText [i] = germanText.pocket;
//             break;
//         return translatedText;
//     }

//     let translation = translatedText.join(" ");
//     console.log(translation);
    // return translation;
// }

// translateToGerman("you are the hottest pocket");





// object with the german text, value and key



// create html page that accepts user input, capture user value(getelementbyid), seperate those words out with split, put those words into an array,
//let array = [];
//wordarray.foreach(word) let 
//for each of these words I want you to do something with it, now let me tell you what I want to do with it... let a variable hold info. 
// .join to put the words in the array back together to be put on the dom

//put the german words in an object and compare the english words entered to the german words in that object


//can use .map
//look up if in loop 

