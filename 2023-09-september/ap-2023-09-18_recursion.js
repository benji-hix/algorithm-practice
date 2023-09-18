// given a number, recursively add the sum of all digits > 0 and <= number
// round down for decimals

function recursiveSigma(num) {
    //* edge cases
    const int = parseInt(num);
    if (isNaN(int)) return null;
    if (int < 1) return 0;

    return int + recursiveSigma(int - 1);
}

console.log(recursiveSigma(5));

//algo 2
// recursively sum an array of integers

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;


//* variation using an index as an arguent
function sumArr(nums, index=0) {

    if (index >= nums.length) return 0

    return nums[index] + sumArr(nums, index+1)
}
//* variation using pop()
function sumArr(nums, index=0) {

    if (nums.length === 0) return 0
    
    return nums.pop() + sumArr(nums)
}

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))
console.log(sumArr(nums4))