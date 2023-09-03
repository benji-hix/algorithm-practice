// in both python and JavaScript, construct a function utilizing
// ternary operators and a callback function.
// Then, call the function utilizing lambda.

function greaterThan10(callback, x) {
    return callback(x) > 10 ? "yes" : "no";
}

console.log(greaterThan10(x => x * 2, 3));