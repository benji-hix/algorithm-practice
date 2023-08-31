// Make a function that will return a greeting statement that uses an input; 
// your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
    return "Hello, " + name + " how are you doing today?"
}

// Complete the solution so that it returns true if the first 
// argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending) {
    return (str.slice((str.length-ending.length)) == ending)

}

//     Create a function named divisors/ that takes an integer n > 1 and returns an array with all of the integer's divisors(
//     except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
    var solution = []
    for (i = 2; i < integer; i++) if (integer % i == 0) solution.push;
    return solution.length ? solution : integer + ' is prime';
}


// below, see less concise version of code 
// function divisors(integer) {
//     var solution = [];
//     for (i = 2; i < integer; i++) {
//         if (integer % i == 0) {
//             solution.push(i);
//         }
//     }
//     if (solution.length == 0) {
//         return integer + ' is prime';
//     }
//     return solution;
// }
