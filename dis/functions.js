"use strict";
function add_(n1, n2) {
    return n1 + n2;
}
function printResult_(num) {
    console.log('Result: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult_(add_(5, 12));
let combineValues_;
combineValues_ = add_;
console.log(combineValues_(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
