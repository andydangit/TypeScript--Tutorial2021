let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}


// This function return Never
function generateError (message: string, code: number): never {
    throw { message: message, errorCode: code};
    // while (true) {}
}

generateError('An error occurred!', 500);

