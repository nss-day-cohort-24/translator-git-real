(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let danish = document.getElementById('danish');
danish.addEventListener('click', danishString);

function toDanish(event) {
    return 'du er den hotteste lomme';
}

var danishString = toDanish();

module.exports = danishString;
},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){

'use strict';

// REQUIRES
let italian = require("./mk-italian");
let german = require("./german");
let spanish = require("./spanish");
let danish = require("./danish");
let language;



// IDS 
let printDiv = document.getElementById('translatePrint');

let italianButton = document.getElementById('italian');
italianButton.addEventListener('click', chooseLangauge);

let germanButton = document.getElementById('german');
germanButton.addEventListener('click', chooseLangauge);

let spanishbutton = document.getElementById('spanishBTN');
spanishbutton.addEventListener('click', chooseLangauge);

let danishbutton = document.getElementById('danish');
danishbutton.addEventListener('click', chooseLangauge);

function chooseLangauge() {
    if(event.target.id === 'italian'){
        language = italian;
    }else if(event.target.id === 'german'){
        language = german;
    }else if(event.target.id === 'spanishBTN'){
        language = spanish;
    }else if(event.target.id === 'danish'){
        language = danish;
    }else{
        language = ' ';
    }
}

// EVENT LISTENERS 
let translate = document.getElementById('translate');
translate.addEventListener('click', printToDiv);



function printToDiv(){
printDiv.innerHTML = language;
}



},{"./danish":1,"./german":2,"./mk-italian":4,"./spanish":5}],4:[function(require,module,exports){
'use strict';

let italian = document.getElementById('italian');
italian.addEventListener('click', italianString);

function toItalian(event){
  return 'Sei la tasca più calda';
}

var italianString= toItalian();

module.exports = italianString;
},{}],5:[function(require,module,exports){
"use strict";
console.log("spanish.js TEST");

function toSpanish(){
        return "Eres el mejor bolsillo";
}
var spanishString = toSpanish();

let thisSpanish = document.getElementById("spanishBTN").addEventListener("click", toSpanish);

module.exports = spanishString;
},{}]},{},[3]);
