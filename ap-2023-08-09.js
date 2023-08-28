// algo 1
// Given an array and an item to search for, return the index of 
// the item being searched for.

// variables
var arr1 = ["a", "b", "c"];
var searchItem1 = "c";
var expected1 = 2;

var arr2 = ["a", "b", "c"];
var searchItem2 = 5;
var expected2 = -1;

var arr3 = ["c", "a", "b", "c"];
var searchItem3 = "c";
var expected3 = 0;

var arr4 = [];
var searchItem4 = 5;
var expected4 = -1;

// function
function indexOf(arr, searchItem) {
    var result = -1;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == searchItem) return i;
    }
    return result;
}

// Tests
var result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

var result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

var result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

var result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);


// algo 2
// Retrieve the nth to last indexed item from the given array.

// variables
var arr1 = ["a", "b", "c", "d"];
var idx1 = 1;
var expected1 = "d";

var arr2 = ["a", "b", "c", "d"];
var idx2 = 2;
var expected2 = "c";

var arr3 = ["a", "b", "c", "d"];
var idx3 = 0;
var expected3 = null;

var arr4 = ["a", "b", "c", "d"];
var idx4 = -1;
var expected4 = null;

var arr5 = [];
var idx5 = 2;
var expected5 = null;

// function
function nthLast(arr, index) {
    if (index <= 0 || index > arr.length) return null;
    return arr[(arr.length - index)];
}

// Tests
var result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

var result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

var result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

var result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

var result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);


// codewars algo
/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function loveTest (flower1, flower2) {
    return (flower1 + flower2) % 2 != 0;
}
    