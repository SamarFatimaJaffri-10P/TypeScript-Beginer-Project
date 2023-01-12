function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1; // it is a good practice to assign type while creating variable in an unassigned way
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
// objects
/* if you don't mention the object type, a concrete object is created
 * a concrete is an object that couldn't be modified
 * Don't assign object type to an object, assign {key: type, key: type, ...}
*/
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];     // this creates a tuple with fixed datatypes
// } = {
//     name: 'Sam',
//     age: 22,
//     hobbies: ['Coding', 'Learning'],
//     role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Sam',
    age: 22,
    hobbies: ['Coding', 'Learning'],
    role: Role.ADMIN
};
// person.role.push('admin');  // length is not enforced in push
// person.role = []         // but length is enforced here, we can't assign more or less then 2 element array
// person.role[1] = 10;     // throws error
// array and tuples
var favoriteActivities;
favoriteActivities = ['Coding', 'Learning'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby.map());    // this throw the error
    console.log(hobby.toUpperCase());
}
if (person.role == 5) {
    console.log('Person is Admin!');
}
