/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num5 = 1183;
const expected5 = 4;

const num6 = 369369;
const expected6 = 9;

function sumToOneDigit(num) {

    if (!num) return null;
    //* nmmbers < 10 by default have one digit
    if (num < 10) return num;
    
    //* convert int to string to make it iterable 
    num = num.toString()
    let answer = 0;
    for (digit of num) answer += parseInt(digit);

    //* recursion
    return (answer < 10) ? answer : sumToOneDigit(answer);
}

console.log(sumToOneDigit(num1))
console.log((expected1))
console.log(sumToOneDigit(num2))
console.log((expected2))
console.log(sumToOneDigit(num3))
console.log((expected3))
console.log(sumToOneDigit(num5))
console.log((expected5))
console.log(sumToOneDigit(num6))
console.log((expected6))
