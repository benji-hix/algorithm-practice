// algorithm 1
/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

var nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
var expected1 = 3;

var nums2 = [];
var expected2 = 0;

var nums3 = [-4, -2, -6];
var expected3 = 3;

function countEvenNegatives(nums) {
    var count = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && nums[i] % 2 == 0) {
            count += 1;
        }
    }
    return count;
}



//algorithm 2
/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.
*/

var string1 = "hello";
var expected1 = "Hello";

var string2 = "";
var expected2 = "";

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var strings1 = ["hello", "world"];
var expectedStrings1 = ["Hello", "World"];


function capitalization(strings) {
    for (i = 0; i < strings.length; i++) {
        strings[i] = capitalize(strings[i]);
    }
    return strings
}
