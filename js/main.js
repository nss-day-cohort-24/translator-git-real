
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


