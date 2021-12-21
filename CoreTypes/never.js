"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// This function return Never
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError('An error occurred!', 500);
