'use strict';

let danish = document.getElementById('danish');
danish.addEventListener('click', danishString);

function toDanish(event) {
    return 'du er den hotteste lomme';
}

var danishString = toDanish();

module.exports = danishString;