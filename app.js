function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    /** undefined expect a return statement with no return value
     * Use it only when you are clear that you want a function to return undefine
     * Else void can be used instead, and it is more common practice*/
    console.log('Result: ' + num);
    return;
}
// callback and function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;     // throws error
console.log(combineValues(8, 8));
/**
 * Creating anonymous function by,
 * (params) => {
 *   function logic goes here ...
 * }
 */
addAndHandle(10, 20, function (result) {
    console.log(result);
});
