
'use strict';

// REQUIRES
let italian = require("./mk-italian");

// IDS 
let printDiv = document.getElementById('translatePrint');

// EVENT LISTENERS 
let translate = document.getElementById('translate');
translate.addEventListener('click', printToDiv);

function printToDiv(){
printDiv.innerHTML = italian;
}


