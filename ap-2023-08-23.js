
/* algo 1
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
*/


function removeAt(items, idx) {
    
    // address situations where items[idx] is undefined
    if (idx < 0 || idx >= items.length) return null;
    // shift every element after min 1 space to the left
    const removedItem = items[idx];
    for (var i = idx; i < items.length; i++) {
        items[i] = items[i + 1];
    }

    items.pop();
    return removedItem;
}

console.log(removeAt(arr1, removeIdx1) + " should be " + expected1);
console.log(arr1 + " should be " + arr1Expected);
console.log(removeAt(arr2, removeIdx2) + " should be " + expected2);
console.log(arr2 + " should be " + arr2Expected);
console.log(removeAt(arr3, removeIdx3) + " should be " + expected3);
console.log(arr3 + " should be " + arr3Expected);


/* algo 2
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];


function minToFront(nums) {
    var min = nums[0];
    var minIdx = 0;

    // identify min value and store its index
    for (var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
        minIdx = i;
    }
    }
    // shift all elements before min 1 space to the right
    for (i = minIdx; i > 0; i--) {
        nums[i] = nums[i-1]
    }

    nums[0] = min;
    return nums;

}

console.log(minToFront(nums1) + " should be " + expected1);
console.log(minToFront(nums2) + " should be " + expected2);
console.log(minToFront(nums3) + " should be " + expected3);


// algo 3
/* Complete the solution so that it returns true if the 
first argument(string) passed in ends with the 2nd argument (also a string). */

function solution(str, ending) {

    const str1 = String(str).split('');
    const str2 = String (ending).split('');

    console.log(str1);
    console.log(str2);

    for (i = 0; i < str2.length; i++)
    if (str2[i] != str1[(str1.length - str2.length + i)]) return false;

    return true;

}

console.log(solution("abcd", "ce"));

// ideal solution
function solution(str, ending) {
  return str.endsWith(ending);
}