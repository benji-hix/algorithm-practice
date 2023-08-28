/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

function indexOfMinVal(nums) {
    var minValue = nums[0];
    var minIndex = 0;

    if(!nums.length) return -1;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] < minValue) {
            minValue = nums[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(indexOfMinVal(nums3));

/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ["a", "b"];
var expected2 = ["b", "a"];

var arr3 = ["a"];
var expected3 = ["a"];

var arr4 = [];
var expected4 = [];

//two variables
function reverseArr(items) {
    var j = items.length - 1;
    for (i = 0; i < j; i++, j--) {
        var temp = items[j];
        items[j] = items[i];
        items[i] = temp;
    }
    return items;
}

// one variable
function reverseArr(items) {
  for (i = 0; i < (items.length - 1 - i); i++) {
    var temp = items[i];
    items[i] = items[items.length - 1 - i];
    items[items.length - i - 1] = temp;
  }
  return items;
}

// defining end point as exactly halfway through array 
function reversArr(items) {
  for (i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[i];
    items[i] = items[items.length - 1 - i];
    items[items.length - i - 1] = temp;
  }
  return items;
}
