// algo: Given an array, rotate the array in place to the 
// right by "k" steps, where "k" is non-negative.

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3.3;
const expected1 = [5, 6, 7, 1, 2, 3, 4];

const nums2 = [-1, -100, 3, 99];
const k2 = 2.1234;
const expected2 = [3, 99, -1, -100];

const nums3 = [1, 2, 3, 4];
const k3 = 4.2456;
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 2];
const k4 = 5.2134;
const expected4 = [2, 1];

const nums5 = [1, 2, 3, 4, 5];
const k5 = -2.1;
const expected5 = [3, 4, 5, 1, 2];

const nums6 = [1, 2, 3];
const k6 = -3.9;
const expected6 = [1, 2, 3];

const nums7 = [3, 6, 9, 12];
const k7 = -5.4;
const expected7 = [6, 9, 12, 3];

function rotateArray(nums, k) {
    switch (true) {
    // if k is positive, rotate to the right k times
    case (k > 0): {
        k = Math.floor(k) % nums.length; // remove unnecessary loops and decimals
        for (var j = 0; j < k; j++) {
            var temp = nums[nums.length-1];
            for (i = nums.length-1; i > 0; i--) {
                nums[i] = nums[i-1];
            }
            nums[0] = temp;
        }
        return nums;
    }
    // if k is negative, rotate to the left k times
    case (k < 0): {
        k = Math.floor(Math.abs(k)) % nums.length; // remove unnecessary loops and decimals
        for (var j = 0; j < k; j++) {
            var temp = nums[0];
            for (i = 0; i < nums.length; i++) {
                nums[i] = nums[i+1];
            }
            nums[nums.length - 1] = temp;
        }
        return nums;
    }
}    
}




console.log(rotateArray(nums1, k1) + " should be " + expected1);
console.log(rotateArray(nums2, k2) + " should be " + expected2);
console.log(rotateArray(nums3, k3) + " should be " + expected3);
console.log(rotateArray(nums4, k4) + " should be " + expected4);

console.log(rotateArray(nums5, k5) + " should be " + expected5);
console.log(rotateArray(nums6, k6) + " should be " + expected6);
console.log(rotateArray(nums7, k7) + " should be " + expected7);

