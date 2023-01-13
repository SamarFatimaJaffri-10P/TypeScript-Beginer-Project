"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Button is clicked!', message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Thats great!'));
}
