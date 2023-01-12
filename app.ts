function add(n1: number, n2: number, showResult: boolean, phrase: string): number | undefined {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

let number1: number;    // it is a good practice to assign type while creating variable in an unassigned way
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase);

// objects
/* if you don't mention the object type, a concrete object is created
 * a concrete is an object that couldn't be modified
 * Don't assign object type to an object, assign {key: type, key: type, ...}
*/
const person: {name: string, age: number} = {
    name: 'Sam',
    age: 22
};

console.log(person.name);