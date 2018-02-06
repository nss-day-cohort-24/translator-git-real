'use strict';

let italian = document.getElementById('italian');
italian.addEventListener('click', italianString);

function toItalian(event){
  return 'Sei la tasca più calda';
}

var italianString= toItalian();

module.exports = italianString;