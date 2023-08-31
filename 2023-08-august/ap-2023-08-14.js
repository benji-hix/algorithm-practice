// algo 1
// given an array of strings, randomly choose a response and return it
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

function consultTheOracle(arr) {
    return arr[Math.round(Math.random()*arr.length)];
  
}

console.log(consultTheOracle(lifesAnswers));

// algo 2
// Given one array, return a new array that contains all of the original
// items duplicated

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

// method 1
function concatArrWithSelf(arr) {
    var newArray = arr;
    var ogLength = arr.length;

    for (i = 0; i < ogLength; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

// method 2 using spread


function concatArrWithSelf(arr1) {
    return [...arr1, ...arr1];
}

// method 3 using .concat
var arr = ['a', 'b', 'c'];

function concatArrWithSelf(arr1) {
    return arr1.concat(arr1);
}



// bonus algo 3
// loop an object's keys and print all values 
var exampleObject = {
    a: [1, 5],
    b: [2, 10],
    c: [3, 15]
}

function loopObject(obj) {
    for (const key in obj) {
        // console.log(key);
        console.log(obj[key][1]);
    }

}

loopObject(exampleObject);

