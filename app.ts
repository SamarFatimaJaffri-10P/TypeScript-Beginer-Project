let userInput: unknown;     // unknown type is better than any
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;   // throws error: Type 'unknown' is not assignable to type 'string'.ts(2322)
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    /**
     * This function just throws error and never returns anything
     */
    throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);