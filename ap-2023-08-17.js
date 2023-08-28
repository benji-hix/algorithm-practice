// Implement the function which takes an array containing the names of people that
// like an item. It must return the display text as shown in the examples:
function likes(names) {
    switch (names.length) {
        case (0): return "no one likes this";
        case (1): return names[0] + " likes this";
        case (2): return names[0] + " and " + names[1] + " like this";
        case (3): return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default: return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
    }
  }

// algo 1 -- flatten a 2d array

var twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDimArr2 = [[1], [2], [3]];
var expected2 = [1, 2, 3];

var twoDimArr3 = [[], [], [10, 20]];
var expected3 = [10, 20];

function flatten2dArray(twoDimArr) {
    var flatArray = [];
    for (i = 0; i < twoDimArr.length; i++) {
        for (j = 0; j < twoDimArr[i].length; j++) {
            flatArray.push(twoDimArr[i][j]);
    }
    }
    return flatArray;
}


console.log(flatten2dArray(twoDimArr3)); 




// algo 2 -- 2nd largest 
// given an array, return the second largest value.
// if there is no second largest value, return null
var nums1 = [2, 3, 1, 4];
var expected1 = 3;

// largest is first
var nums2 = [4, 1, 3, 2];
var expected2 = 3;

// largest duplicated first
var nums3 = [4, 4, 4, 1, 3, 2];
var expected3 = 3;

// 2nd largest is first
var nums4 = [3, 1, 4, 2];
var expected4 = 3;

// largest is 2nd
var nums5 = [3, 4, 2, 1];
var expected5 = 3;

var nums6 = [3, 3];
var expected6 = null;

var nums7 = [2];
var expected7 = null;

var nums8 = [];
var expected8 = null;



function secondLargest(nums) {
var largest = nums[0];
var secondLargest = null;

if (nums.length < 3) return null;

else {
    for (i = 0; i < nums.length; i++) {
        switch (true) {
            case (nums[i] == largest || nums[i] == secondLargest): {
                break;
            }
            case (nums[i] > largest && nums[i] > secondLargest): {
                largest = nums[i];
                break;
            }
            case (nums[i] < largest && nums[i] >= secondLargest): {
                secondLargest = nums[i];
                break;
            }
            default: break;
        }
    }
}
return secondLargest;
}
