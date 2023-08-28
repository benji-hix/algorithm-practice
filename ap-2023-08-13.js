// algo 1: given a string of numbers, return an integer

function stringToNumber(string) {
    return parseInt(string);
}

console.log(stringToNumber("12345") + 678);
console.log("12345" + 678);

// algo 2: given an integer > 0, return an integer 
// with all digits in descending order
// for example, an argument of 14325 should return 54321.

function reverseDigits(integer) {
    return parseInt(String(integer).split('').sort().reverse().join(''));
}

console.log(reverseDigits(392851132));

// algo 3: create a function that takes three arguments,
// one operation (+,-,/,*) and two numbers,
// and returns the answer to the equation number1 operator number2 = 

function basicOp(operation, value1, value2) {
    if (operation == "+") return value1 + value2;
    else if (operation == "-") return value1 - value2;
    else if (operation == "/") return value1 / value2;
    else if (operation == "*") return value1 * value2;
    else return "invalid entry";
}

console.log(mathOperations("-", 3, 5));

// rewritten using switches and cases

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '/': return value1 / value2;
        case '*': return value1 * value2;
        default: return "invalid entry";
    }
}

console.log(basicOp("*", 3, 5));