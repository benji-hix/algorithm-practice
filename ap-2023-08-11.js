// algo 1 -- slice
// given array, start index, end index (exclusive), return new array
// what to do if provided start and end are out of bounds? (empty array)

var arr1 = ["a", "b", "c", "d", "e"];
var startIdx1 = 0;
var endIdx1 = 5;
var expected1 = ["a", "b", "c", "d", "e"];

var arr2 = ["a", "b", "c", "d", "e"];
var startIdx2 = 0;
var endIdx2 = 1;
var expected2 = ["a"];

var arr3 = ["a", "b", "c", "d", "e"];
var startIdx3 = 1;
var endIdx3 = 2;
var expected3 = ["b"];

var arr4 = ["a", "b", "c", "d", "e"];
var startIdx4 = -100;
var endIdx4 = 100;
var expected4 = ["a", "b", "c", "d", "e"];

var arr5 = ["a", "b", "c", "d", "e"];
var startIdx5 = 0;
var endIdx5 = 0;
var expected5 = [];

var arr6 = ["a", "b", "c", "d", "e"];
var startIdx6 = 1;
var endIdx6 = 1;
var expected6 = [];

function slice(items, startIdx, endIdx) {

var newArray = [];

if (startIdx < 0){
    var startIdx = 0;
}

if (endIdx > items.length) {
    var endIdx = items.length;
}

for (var i = startIdx; i < endIdx; i++) {
    newArray.push(items[i]);
}

return newArray;
}


// algo 2 -- concat
// combine two arrays 

var arrA1 = ["a", "b"];
var arrB1 = [1, 2, 3];
var expected1 = ["a", "b", 1, 2, 3];

var arrA2 = [1, 2, 3];
var arrB2 = ["a", "b"];
var expected2 = [1, 2, 3, "a", "b"];

function concat(items1, items2) {

    var newArray = [];
    
    for (i = 0; i < items1.length; i++) {
        newArray.push(items1[i]);
    }

    for (i = 0; i < items2.length; i++) {
        newArray.push(items2[i]);
    }

    return newArray;
}

// algo 3
// given three test scores, calculate the average then return the corresponding letter grade
// practice writing code concisely 

function getGrade (s1, s2, s3) {

    var avg = (s1 + s2 + s3)/3;

    if (avg < 60) return 'F';
        else if (avg < 70) return 'D';
        else if (avg < 80) return 'C';
        else if (avg < 90) return 'B';
        else return 'A';
}


//below is equivalent output with significantly less concise style 
function getGrade (s1, s2, s3) {

    var avg = (s1 + s2 + s3)/3;
    
    if (avg < 60) {
            return 'F';
    }
    else if (avg < 70) {
        return 'D';
    }
    else if (avg < 80) {
        return 'C';
    }
    else if (avg < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}