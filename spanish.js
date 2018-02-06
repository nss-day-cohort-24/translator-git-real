"use strict";
console.log("spanish.js TEST");

function spanishTranslator(){
        let toSpanish = "Eres el mejor bolsillo";
        if (document.getElementById("user-input").value.toLowerCase() == "you are the hottest pocket") {
                document.getElementById("translatePrint").innerHTML = toSpanish;
        }
}



module.exports = spanishTranslator;