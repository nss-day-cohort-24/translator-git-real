"use strict";
console.log("spanish.js TEST");

function toSpanish(){
        return "Eres el mejor bolsilor";
}
var spanishString = toSpanish();

let thisSpanish = document.getElementById("spanishBTN").addEventListener("click", toSpanish);

module.exports = spanishString;