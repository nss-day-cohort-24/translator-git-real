(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = 'du er den hotteste lomme'; 
},{}],2:[function(require,module,exports){
"use strict";
module.exports = "Du bist die heißeste Tasche";
    

     






    
   
    




},{}],3:[function(require,module,exports){

'use strict';

// REQUIRES aka each individual javascript file
// that holds a function that returns a string.
let italian = require("./mk-italian");
let german = require("./german");
let spanish = require("./spanish");
let danish = require("./danish");
let language;
let userInput = document.getElementById('user-input');
let keyWord = 'You are the hottest pocket';

// IDS & EVENT LISTENERS
// These event listeners listen to the language and 
// translate buttons and store them in a variable. 
let printDiv = document.getElementById('translatePrint');

let italianButton = document.getElementById('italian');
italianButton.addEventListener('click', chooseLangauge);

let germanButton = document.getElementById('german');
germanButton.addEventListener('click', chooseLangauge);

let spanishbutton = document.getElementById('spanishBTN');
spanishbutton.addEventListener('click', chooseLangauge);

let danishbutton = document.getElementById('danish');
danishbutton.addEventListener('click', chooseLangauge);

let translate = document.getElementById('translate');
translate.addEventListener('click', printToDiv);

// STORE STRING FROM CHOSEN LANGAUGE
function chooseLangauge() {
    if(event.target.id === 'italian' && userInput.value === keyWord){
        language = italian;
    }else if(event.target.id === 'german' && userInput.value === keyWord ){
        language = german;
    }else if(event.target.id === 'spanishBTN' && userInput.value === keyWord){
        language = spanish;
    }else if(event.target.id === 'danish' && userInput.value === keyWord){
        language = danish;
    }else{
        language = '';
    }
}

//Print the string stored in the language variable
// (whos content is the string specified by the selected lanuage)
// to the page.
function printToDiv(){
printDiv.innerHTML = language;
}



},{"./danish":1,"./german":2,"./mk-italian":4,"./spanish":5}],4:[function(require,module,exports){
'use strict';

module.exports = 'Sei la tasca più calda';
},{}],5:[function(require,module,exports){
"use strict";
module.exports = "Eres el mejor bosillo";
},{}]},{},[3]);
