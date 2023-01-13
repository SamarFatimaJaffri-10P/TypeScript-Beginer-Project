"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult, resultPhrase);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Sam',
    age: 22,
    hobbies: ['Coding', 'Learning'],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ['Coding', 'Learning'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role == 5) {
    console.log('Person is Admin!');
}
