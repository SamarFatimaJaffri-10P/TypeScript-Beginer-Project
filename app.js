"use strict";
let userInput; // unknown type is better than any
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput;   // throws error: Type 'unknown' is not assignable to type 'string'.ts(2322)
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    /**
     * This function just throws error and never returns anything
     */
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
