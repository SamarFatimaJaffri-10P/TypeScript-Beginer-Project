"use strict";
function add_(n1, n2) {
    return n1 + n2;
}
function printResult_(num) {
    /** undefined expect a return statement with no return value
     * Use it only when you are clear that you want a function to return undefine
     * Else void can be used instead, and it is more common practice*/
    console.log('Result: ' + num);
    return;
}
// callback and function
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult_(add_(5, 12));
let combineValues_;
combineValues_ = add_;
// combineValues = printResult;     // throws error
console.log(combineValues_(8, 8));
/**
 * Creating anonymous function by,
 * (params) => {
 *   function logic goes here ...
 * }
 */
addAndHandle(10, 20, (result) => {
    console.log(result);
});
