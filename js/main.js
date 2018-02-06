
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


